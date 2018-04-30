const OSLib = require('./oslib');


class Faaspot {

    constructor(options={}) {
        if (!options.apiKey) throw new Error('Missing api key');
        this.apiKey = options.apiKey;           
    }    

    lib(lib) {
        function _camelCaseToSnakeCase(name) {
            return name.replace(/([A-Z])/g, (g) => `_${g[0].toLowerCase()}`);
        }

        return new Proxy(new OSLib({'apiKey': this.apiKey, 'lib': lib}), {
            get: function(target, propKey, receiver) {    
                propKey = _camelCaseToSnakeCase(propKey);
                return function(...args) {
                    return target.endpoint(propKey).call(...args)
                }
            }
        });
    }    
}

module.exports = function(config) {
    if (config) {
        return new Faaspot(config);        
    }
    return Faaspot;
}