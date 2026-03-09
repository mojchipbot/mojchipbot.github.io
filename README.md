# mojchipbot.github.io

A simple "Hello World" webpage built with TypeScript and deployed to GitHub Pages.

## Project Structure

```
├── src/
│   └── index.ts          # TypeScript source code
├── dist/                 # Built JavaScript output
│   ├── bundle.js         # Bundled and minified JavaScript
│   └── bundle.js.map     # Source map for debugging
├── index.html            # HTML entry point
├── tsconfig.json         # TypeScript configuration
├── webpack.config.js     # Webpack build configuration
├── package.json          # Node.js dependencies and scripts
└── README.md             # This file
```

## Features

- ✨ Simple "Hello World" webpage
- 🔨 Built with TypeScript
- 📦 Bundled with Webpack
- 🚀 Deployed to GitHub Pages at https://mojchipbot.github.io

## Building

Install dependencies:
```bash
npm install
```

Build the project:
```bash
npm run build
```

This will generate the bundled JavaScript in the `dist/` directory.

## How It Works

1. `src/index.ts` contains the TypeScript code that displays "Hello World"
2. Webpack compiles and bundles the TypeScript into `dist/bundle.js`
3. `index.html` loads the bundled JavaScript and displays the result
4. GitHub Pages serves the static site directly from this repository

## Viewing the Site

Visit: **https://mojchipbot.github.io**

The webpage displays "Hello World" in large, cyan text on a dark background.

## License

ISC
