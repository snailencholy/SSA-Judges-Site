//The start of creating objects from the xml file. 
//The way they have the xml data set up using the node script really
//makes hard to read json objects. better to just build a script to create
//my own objects and go from there.

const fs = require('fs');
const readline = require('readline');

//let buffer = fs.readFileSync("judge-data-xml.xml", "utf8");
async function buildObjects() {
    const fileStream = fs.createReadStream('judge-data-xml.xml');

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    for await(const line of rl) {
        console.log(`line from file: ${line}`);
    }
}

buildObjects()