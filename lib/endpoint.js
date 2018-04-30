const request = require('request');
const rp = require('request-promise-native');


class Endpoint {

    constructor(options={}) {
        if (!options.apiKey) throw new Error('Missing api key');
        if (!options.lib) throw new Error('Missing lib');
        if (!options.endpoint) throw new Error('Missing api endpoint');
        this.apiKey = options.apiKey;
        this.lib = options.lib;
        this.endpoint = options.endpoint;
    }

    call(args, callback) {
        var url = `https://faaspot.io/${this.lib}/${this.endpoint}/`;
        if (callback) {
            return this._call_request(url, args, callback);            
        } else {
            return this._call_promise(url, args);
        }       
    }

    _call_request(url, body, callback) {
        var headers = {"Content-Type": "application/json", "Token": `Basic ${this.apiKey}`};
        var options = {
            url: url,
            method: 'POST',
            json: true,
            headers: headers,
            body: body
        };
        request(options, callback);
    }

    _call_promise(url, body) {
        var headers = {"Content-Type": "application/json", "Token": `Basic ${this.apiKey}`};
        var options = {
            uri: url,
            method: 'POST',
            json: true,
            headers: headers,
            body: body
        };
        return rp(options);
    } 
}

module.exports = Endpoint;