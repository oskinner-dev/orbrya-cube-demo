import { dotnet } from './_framework/dotnet.js';

export function addTrees() {
    if (window.addTrees) {
        window.addTrees();
    }
}

export function removeTrees() {
    if (window.removeTrees) {
        window.removeTrees();
    }
}

export function startRotation() {
    if (window.startRotation) {
        window.startRotation();
    }
}

export function stopRotation() {
    if (window.stopRotation) {
        window.stopRotation();
    }
}

export function resetCamera() {
    if (window.resetCamera) {
        window.resetCamera();
    }
}

async function initDotNet() {
    console.log('🔄 Loading .NET WebAssembly...');
    
    const { setModuleImports, getAssemblyExports, getConfig } = await dotnet
        .withDiagnosticTracing(false)
        .withApplicationArgumentsFromQuery()
        .create();

    setModuleImports('main.js', {
        addTrees: addTrees,
        removeTrees: removeTrees,
        startRotation: startRotation,
        stopRotation: stopRotation,
        resetCamera: resetCamera
    });

    const config = getConfig();
    const exports = await getAssemblyExports(config.mainAssemblyName);

    await exports.OrbryaCubeDemo.Program.Main();

    window.CSharpController = {
        addTrees: exports.OrbryaCubeDemo.CubeController.AddTrees,
        removeTrees: exports.OrbryaCubeDemo.CubeController.RemoveTrees,
        startRotation: exports.OrbryaCubeDemo.CubeController.StartRotation,
        stopRotation: exports.OrbryaCubeDemo.CubeController.StopRotation,
        resetCamera: exports.OrbryaCubeDemo.CubeController.ResetCamera
    };

    console.log('✅ C# WASM loaded successfully!');
    console.log('💡 Try: CSharpController.addTrees()');
    
    document.querySelectorAll('.control-btn').forEach(btn => {
        btn.disabled = false;
    });
}

initDotNet().catch(err => {
    console.error('❌ Failed to load .NET:', err);
});
