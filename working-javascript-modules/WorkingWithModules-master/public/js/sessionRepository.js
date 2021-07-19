const sessionURL = 'sessions.json';

let sessionList = [];


function getSessions() {
    return new Promise(function (resolve, reject) {
        var oReq = new XMLHttpRequest();
        oReq.onload = function (e) {
            sessionList = e.target.response;
            resolve(e.target.response);
        };
        oReq.open('GET', sessionURL, true);
        oReq.responseType = 'json';
        oReq.send();
    })
}

// NOte: there's a few ways to do this
// as a named export or as a default export
// default exports: you don't need to know the name
// of what you're importing when importing
// but named exports - you need to know the name
// when importing

// export {getSessions};

// export {getSessions as sessions};
// can rename exports ^^^^

export {getSessions as default, sessionURL};
//this allows for easier importing
export {sessionTemplate} from './template.js'