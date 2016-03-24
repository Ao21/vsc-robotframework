import * as request from 'request';

export class Connect {
    
    retrieve() {
        let keywords = [];
        
        var hub_url = 'http://127.0.0.1/';
        let keyword_url = "/api/keywords";
        request.get({ 
            baseUrl:'http://127.0.0.1:7070',
            port: 7070,
            uri: keyword_url,
            json: true,
        }, (error, response:any, body) => {
            if (!error) {
                body.keywords.forEach(element => {
                    console.log(element);
                });
            }
            
        })
    }
}