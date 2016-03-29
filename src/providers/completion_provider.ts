import * as vscode from 'vscode';

import {RFService} from './../server/connect';
export class RFCompletionItemProvider implements vscode.CompletionItemProvider {
    private cachedKeywords: any[];
    private RFServer: RFService;

    public constructor(context: vscode.ExtensionContext) {
        this.RFServer = new RFService();
    }

    public provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Thenable<vscode.CompletionItem[]> {
        return new Promise<vscode.CompletionItem[]>((resolve, reject) => {
            var filename = document.fileName;
            if (position.character <= 0) {
                return resolve([]);
            }
            var txt = document.getText(new vscode.Range(new vscode.Position(position.line, position.character - 1), position));
            var columnIndex = position.character;
            this.RFServer.retrieveKeywords(txt).then((res: any) => {
                this.cachedKeywords = res;
                resolve(res);
            });
        });
    }

}