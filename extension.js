const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	let disposable = vscode.window.onDidChangeActiveTextEditor((editor) => {
		if (editor) {
			vscode.commands.executeCommand('moveActiveEditor', { to: 'first' });
		}
	});

	context.subscriptions.push(disposable);
}

function deactivate() {}

// eslint-disable-next-line no-undef
module.exports = {
	activate,
	deactivate
}
