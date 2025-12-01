# Orbrya Cube Demo

C# WebAssembly controlling Three.js graphics - Proof of concept for educational games on Chromebooks.

## Architecture

- **Backend**: C# compiled to WebAssembly for game logic
- **Frontend**: Three.js for 3D rendering
- **Bridge**: JavaScript Interop API connects the two

## Why This Matters

This demo proves that complex game logic can run at 60fps on low-end Chromebooks ($200 Intel Celeron N4000) by:
1. Using compiled C# (WASM) for heavy computation
2. Leveraging Three.js for efficient GPU rendering
3. Minimizing cross-boundary calls between C# and JavaScript

## Run Locally

```bash
cd WasmApp
dotnet run
```

Open http://localhost:5000

## Deployment

Automatically deploys to GitHub Pages on every push to main branch.

Live demo: https://oskinner-dev.github.io/orbrya-cube-demo/

## Built for Orbrya

Educational gaming platform targeting Career & Technical Education (CTE) programs using Perkins V funding.
