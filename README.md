# Orbrya Cube Demo

C# WebAssembly controlling Three.js graphics - Proof of concept for educational games on Chromebooks.

## Architecture

- **Backend**: C# compiled to WebAssembly for game logic
- **Frontend**: Three.js for GPU-accelerated rendering  
- **Bridge**: JavaScript Interop API for seamless communication

## Quick Start

```bash
cd WasmApp
dotnet run
```

Open http://localhost:5000

## The Innovation

This demo proves that we can run high-performance C# logic on $200 Chromebooks by:
1. Compiling C# to WebAssembly (near-native speed)
2. Using Three.js for efficient GPU rendering
3. Zero-install deployment (just a URL)

## Deploy

Automatic deployment via GitHub Actions. Every push to `main` triggers:
- .NET build
- WASM compilation
- GitHub Pages deployment

Built for **Orbrya** - Making CTE education accessible on any device.