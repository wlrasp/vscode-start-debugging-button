# Start Debugging Button

A lightweight Visual Studio Code extension that adds a **Play button** to the editor title bar, allowing you to start debugging with a single click.

The button executes the built-in VS Code `Start Debugging` command, exactly like pressing `F5`.

## Features

- Adds a Play button to the editor title bar.
- Starts debugging using the currently selected launch configuration.
- Uses the native VS Code `debug-start` icon.
- Supports English and Russian tooltip localization.
- No external dependencies.

## Requirements

- Visual Studio Code 1.80.0 or later.

## Installation

### Option 1: Install from source

1. Clone this repository:

   ```bash
   git clone https://github.com/wlrasp/vscode-start-debugging-button.git
   ```

2. Open the project directory:

   ```bash
   cd vscode-start-debugging-button
   ```

3. Install the VS Code Extension Manager:

   ```bash
   npm install -g @vscode/vsce
   ```

4. Package the extension:

   ```bash
   vsce package
   ```

5. Install the generated `.vsix` file:

   ```bash
   code --install-extension start-debugging-button-1.0.0.vsix
   ```

6. Reload VS Code:

   Open the Command Palette (`Ctrl + Shift + P`) and run:

   `Developer: Reload Window`

### Option 2: Install from VSIX

If you already have a `.vsix` file:

1. Open Visual Studio Code.
2. Open the Extensions view (`Ctrl + Shift + X`).
3. Click the three-dot menu (`...`).
4. Select **Install from VSIX...**.
5. Choose the downloaded `.vsix` file.
6. Reload VS Code if prompted.

## Usage

1. Open a project in VS Code.
2. Make sure your debugging configuration is defined in `.vscode/launch.json`.
3. Select the desired debugging configuration.
4. Click the Play button in the editor title bar.

The extension executes:

```javascript
vscode.commands.executeCommand('workbench.action.debug.start');
```

This is equivalent to pressing `F5`.

## Localization

The extension includes two tooltip languages:

- English (default): `Start Debugging`
- Russian: `Начать отладку`

Other languages fall back to English.

## Project Structure

```text
vscode-start-debugging-button/
├── package.json
├── package.nls.json
├── package.nls.ru.json
├── extension.js
└── LICENSE
```

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.