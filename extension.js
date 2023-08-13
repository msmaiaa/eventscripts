const vscode = require('vscode');
const commands = require("./commands.json")

function activate(context) {
	//	TODO: add autocomplete

	let escapeToMd = (str) => {
		return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
	}

	let genCommandMd = (command) => {
		let wordMd = new vscode.MarkdownString();
		wordMd.appendMarkdown(`<h2>${command.command}</h2>`);
		wordMd.appendMarkdown(`<p>Syntax: <code>${command.syntax ? escapeToMd(command.syntax) : command.command}</code></p>`);

		if (command.description) {
			wordMd.appendMarkdown("<hr>")
			wordMd.appendMarkdown(`<h3>Description</h3>`)
			wordMd.appendMarkdown(`<pp>${escapeToMd(command.description)}</p>`)
		}

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

		return wordMd;
	}

	let hoverProvider = vscode.languages.registerHoverProvider('eventscripts', {
		provideHover(document, position, token) {
			const word = document.getText(document.getWordRangeAtPosition(position));

			let command = commands[word];
			if (command) {
				let wordMd = genCommandMd(command);
				return new vscode.Hover(wordMd);
			}
		}
	});
	context.subscriptions.push(hoverProvider);
	let autocompleteProvider = vscode.languages.registerCompletionItemProvider('eventscripts', {
		provideCompletionItems(document, position, token) {
			return Object.keys(commands).map(commandKey => {
				const completionItem = new vscode.CompletionItem(commandKey, vscode.CompletionItemKind.Function);
				const command = commands[commandKey];
				let commandMd = genCommandMd(command);

				completionItem.documentation = commandMd;
				completionItem.insertText = commandKey;
				return completionItem;
			});
		}
	});

	context.subscriptions.push(autocompleteProvider);
}

exports.activate = activate;