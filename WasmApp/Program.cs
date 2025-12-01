using System;
using System.Runtime.InteropServices.JavaScript;

namespace OrbryaCubeDemo;

public partial class CubeController
{
    [JSImport("addTrees", "main.js")]
    internal static partial void AddTreesJS();
    
    [JSImport("removeTrees", "main.js")]
    internal static partial void RemoveTreesJS();
    
    [JSImport("startRotation", "main.js")]
    internal static partial void StartRotationJS();
    
    [JSImport("stopRotation", "main.js")]
    internal static partial void StopRotationJS();
    
    [JSImport("resetCamera", "main.js")]
    internal static partial void ResetCameraJS();
    
    [JSExport]
    public static void AddTrees()
    {
        AddTreesJS();
        Console.WriteLine("Added 10 trees to the forest");
    }
    
    [JSExport]
    public static void RemoveTrees()
    {
        RemoveTreesJS();
        Console.WriteLine("Removed 10 trees from the forest");
    }
    
    [JSExport]
    public static void StartRotation()
    {
        StartRotationJS();
        Console.WriteLine("Started camera rotation");
    }
    
    [JSExport]
    public static void StopRotation()
    {
        StopRotationJS();
        Console.WriteLine("Stopped camera rotation");
    }
    
    [JSExport]
    public static void ResetCamera()
    {
        ResetCameraJS();
        Console.WriteLine("Camera position reset");
    }
}

public partial class Program
{
    [JSExport]
    public static void Main()
    {
        Console.WriteLine("🌲 Orbrya Forest Demo - C# WASM Initialized!");
        Console.WriteLine("✅ Backend ready to control forest scene");
    }
}
