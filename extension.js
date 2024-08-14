const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	function pinActiveEditor() {
		vscode.commands.executeCommand('moveActiveEditor', { to: 'first' });
	}

	let disposable = vscode.window.onDidChangeActiveTextEditor((editor) => {
		if (editor) {
			pinActiveEditor();
		}
	});

	context.subscriptions.push(disposable);

	let disposable2 = vscode.window.onDidChangeActiveNotebookEditor((editor) => {
		if (editor) {
			pinActiveEditor();
		}
	});

	context.subscriptions.push(disposable2);
}

function deactivate() {}

// eslint-disable-next-line no-undef
module.exports = {
	activate,
	deactivate
}
