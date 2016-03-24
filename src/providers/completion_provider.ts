import * as vscode from 'vscode';

export class RFCompletionItemProvider implements vscode.CompletionItemProvider {

    public constructor(context: vscode.ExtensionContext) {
        console.log(context);
    }

    public provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Thenable<vscode.CompletionItem[]> {
        return new Promise<vscode.CompletionItem[]>((resolve, reject) => {
            
            
        });
    }

}