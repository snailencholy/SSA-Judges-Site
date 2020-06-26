//The start of creating objects from the xml file. 
//The way they have the xml data set up using the node script really
//makes hard to read json objects. better to just build a script to create
//my own objects and go from there.

const fs = require('fs');
const readline = require('readline');
const json = require('./judge-data.json');
const fetch = require("node-fetch");

//let buffer = fs.readFileSync("judge-data-xml.xml", "utf8");
// async function buildObjects() {
//     const fileStream = fs.createReadStream('judge-data-xml.xml');

//     const rl = readline.createInterface({
//         input: fileStream,
//         crlfDelay: Infinity
//     });

//     for await(const line of rl) {
        
//         if (line.match(/<FULLY_FAVORABLE>([^<]*)<\/FULLY_FAVORABLE>/)) {
//             console.log(`${line}`);
//         }
//     }
        
    
// }

// buildObjects()
judgeArray = []
for (i=0; i < json.row.length; i++) {
    judgeArray[i] = json.row[i]
}

console.log(judgeArray[12])

// for (i=0; i<json.row.length; i++) {
//     console.log(json.row[i].JUDGE)
//     //console.log(json.row[i].TOTAL_DISPOSITIONS)
//     console.log("Total Dispositions " + json.row[i].TOTAL_ALJ_DIPOSITIONS_ACROSS_ALL_OFFICES)
//     console.log("Total Decisions " + json.row[i].TOTAL_DECISIONS)
//     console.log("Total Awards " + json.row[i].TOTAL_AWARDS)
//     console.log("Total Denials " + json.row[i].TOTAL_DENIALS)
//     console.log("Fully Favorable " + json.row[i].FULLY_FAVORABLE)
//     console.log("Partially Favorable " + json.row[i].PARTIALLY_FAVORABLE + "\n")
    
// }


// let bigJsonString = JSON.stringify(json) 
// console.log(bigJsonString);


// fetch('judge-data.json').then((response) => {
//     return response.json();
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     console.log(err);
// })


