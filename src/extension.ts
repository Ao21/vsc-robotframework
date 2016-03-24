'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

import {Connect} from './server/connect';
import {RFCompletionItemProvider} from './providers/completion_provider';

const ROBOTFRAMEWORK: vscode.DocumentFilter = { language: 'robot', scheme: 'file' }
let diagnosticCollection: vscode.DiagnosticCollection;
let outChannel: vscode.OutputChannel;

export function activate(context: vscode.ExtensionContext) {
    console.log('activated!');

}



// this method is called when your extension is deactivated
export function deactivate() {
}