# Minimalist MTG Life Counter

A heavily optimized, strictly Vanilla JS Progressive Web App (PWA) designed for frictionless 1v1 Magic: The Gathering tabletop play. 

## Features
- **Zero-Look Interface:** Massive, non-visible touch targets (top/bottom halves) let you adjust life without taking your eyes off the board.
- **AMOLED Optimization:** Rendered in true black (`#000000`) for complete pixel-shutdown battery saving.
- **Native Haptics:** Leverages the Vibration API to provide tactile feedback on every life change.
- **Wake Lock Enabled:** Prevents your phone screen from sleeping during long EDH/Modern matches.

## Local Development (Installation)

Since this app operates completely vanilla, the underlying structure uses Vite simply to bundle and serve the app locally.

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/rburchlau001/Robs-Life-Counter.git
   cd Robs-Life-Counter
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the local development server:
   ```bash
   npm run dev
   ```

### Building for Production
To bundle the app for deployment (GitHub Pages, Vercel, Netlify):
```bash
npm run build
```
This will compile all strictly optimized vanilla files into the `dist/` directory.

## Installing to your Phone Native Home Screen (PWA)

Because this app utilizes a `manifest.json`, it is fully installable as a standalone native app on any device:
1. Navigate to the live hosted URL on your mobile browser (e.g. Safari on iOS, Chrome on Android).
2. Tap the **Share** button in your browser.
3. Scroll down and select **"Add to Home Screen"**.
4. The app will immediately download, cache locally, and launch in fullscreen without any browser UI.
