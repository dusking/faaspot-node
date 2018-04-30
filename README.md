# faaspot-node

Nodejs wrapper around the [Faaspot API](https://www.faaspot.com).

## Install

    $ npm install faaspot

## Install from source

    $ git clone https://github.com/faaspot/faaspot-node
    $ cd faaspot-node/
    $ npm install


## Using CamelCase naming convention

The following examples are using snake case convenstion for the library endpoint name. Feel free to use CamelCase instead.
For exmaple, replace `forex.get_currency` with `forex.getCurrency`.


## Promise-based Example

Call the `get_currency` endpoint of the [MicroPyramid/forex-python](https://github.com/MicroPyramid/forex-python) library.

```javascript
const faaspot = require('faaspot')({apiKey: my_api_key});
const forex = faaspot.lib('MicroPyramid/forex-python');

forex.get_currency({"source_currency": "USD", "target_currency": "EUR", "ndigits": 2})
    .then(response => {
        console.log(response);
        // => { source: 'USD', target: 'EUR', currency: '0.83' }
    });
```


## Callback Example

You can also use callback style

```javascript
const faaspot = require('faaspot')({apiKey: my_api_key});
const forex = faaspot.lib('MicroPyramid/forex-python');

forex.get_currency({"source_currency": "USD", "target_currency": "EUR", "ndigits": 2},
    function (error, response, body) {
        console.log(body);
    })
```


## Seperate Steps Example

You can seperate the require statment and Faaspot instance creation

```javascript
const Faaspot = require('faaspot');
const faaspot = new Faaspot({apiKey: 'YOUR_API_KEY'});
const forex = faaspot.lib('MicroPyramid/forex-python');

forex.get_currency({"source_currency": "USD", "target_currency": "EUR", "ndigits": 2})
    .then(response => {
        console.log(response);
    });
```

