
const vscode = require('vscode');

function activate(context) {
    const startDebugging = vscode.commands.registerCommand(
        'localPlayDebug.start',
        async () => {
            await vscode.commands.executeCommand(
                'workbench.action.debug.start'
            );
        }
    );

    context.subscriptions.push(startDebugging);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
