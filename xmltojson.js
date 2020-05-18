const xml2js = require('xml2js');
var url = 'URL TO THE XML'
const fs = require('fs');
const fetch = require('node-fetch');

async function xml(url) {
    const response = await fetch(url)
    return response.text()
}
async function main() {
    async function check() {
        const xml2 = await xml(url)
        xml2js.parseString(xml2, function(err, result) {
        console.log(JSON.stringify(result))
        })
    }
    setInterval(check, 10000)
}
main();
