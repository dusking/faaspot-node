const Endpoint = require('./endpoint');


class OSLib {

    constructor(options={}) {
        if (!options.apiKey) throw new Error('Missing api key');
        if (!options.lib) throw new Error('Missing lib');
        this.apiKey = options.apiKey;
        this.lib = options.lib;
    }

    endpoint(endpoint) {
        return new Endpoint({'apiKey': this.apiKey, 'lib': this.lib, 'endpoint': endpoint});        
    }
}

module.exports = OSLib;