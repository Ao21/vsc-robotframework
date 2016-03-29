import * as request from 'request';
import * as vscode from 'vscode';

export class RFService {

    retrieveKeywords(txt) {
        return new Promise((resolve, rej) => {
            let keywords = [];
            var hub_url = 'http://127.0.0.1/';
            let keyword_url = `/api/keywords`;
            request.get({
                baseUrl: 'http://127.0.0.1:7070',
                port: 7070,
                uri: keyword_url,
                json: true,
            }, (error, response: any, body) => {
                if (error) {
                    rej(error);
                }
                if (!error) {
                    body.keywords.forEach(element => {
                        let el: RobotFrameworkKeywork = element;
                        //let label = el.name.replace(new RegExp(' ', 'g'),'');
                        let newCompletionItem = new vscode.CompletionItem(el.name);
                        newCompletionItem.insertText = el.name;
                        newCompletionItem.documentation = el.doc;
                        keywords.push(newCompletionItem);
                    });
                    resolve(keywords);
                }
            })
        })
    }
}