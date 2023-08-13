const vscode = require('vscode');
const commands = require("./commands.js").commands;

function activate(context) {
	//	TODO: add autocomplete

	let escapeToMd = (str) => {
		return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
	}

	let disposable = vscode.languages.registerHoverProvider('eventscripts', {
		provideHover(document, position, token) {
			const word = document.getText(document.getWordRangeAtPosition(position));

			let command = commands[word];
			if (command) {
				let wordMd = new vscode.MarkdownString();
				wordMd.appendMarkdown(`<h2>${word}</h2>`);
				wordMd.appendMarkdown(`<p>Syntax: <code>${escapeToMd(command.syntax)}</code></p>`);
				wordMd.appendMarkdown("<hr>")
				wordMd.appendMarkdown(`<h3>Description</h3>`)
				wordMd.appendMarkdown(`<pp>${escapeToMd(command.description)}</p>`)
				if (command.parameters.length > 0) {
					wordMd.appendMarkdown("<hr>")
					wordMd.appendMarkdown(`<h3>Parameters</h3>`)
					for (let param of command.parameters) {
						wordMd.appendMarkdown(`<div style="display: block;">
						<em>${param.name}</em> - ${param.description}
						</div>`);
					}
				}

				wordMd.supportHtml = true;

				wordMd.isTrusted = true;
				return new vscode.Hover(wordMd);
			}
		}
	});

	context.subscriptions.push(disposable);
}

exports.activate = activate;