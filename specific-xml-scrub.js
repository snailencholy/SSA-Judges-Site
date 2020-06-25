//The start of creating objects from the xml file. 
//The way they have the xml data set up using the node script really
//makes hard to read json objects. better to just build a script to create
//my own objects and go from there.

const fs = require('fs');
const readline = require('readline');
const judgeData = {
    fullyFavorable: "",
    name: "",
    partiallyFavorable: "",
    totalAwards: "",
    totalDecisions: "",
    totalDenials: "",
    totalDispositions: "",
}

let judgeArray = []

async function buildObjects() {
    const fileStream = fs.createReadStream('judge-data-xml.xml');
    

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    i=0

    for await(const line of rl) {
        
        if (line.match(/<FULLY_FAVORABLE>([^<]*)<\/FULLY_FAVORABLE>/)) {
            judgeData.fullyFavorable = line;
            //console.log(judgeData)
        } else if (line.match(/<JUDGE>([^<]*)<\/JUDGE>/)) {
            judgeData.name = line;
        } else if (line.match(/<PARTIALLY_FAVORABLE>([^<]*)<\/PARTIALLY_FAVORABLE>/)) {
            judgeData.partiallyFavorable = line;
        } else if (line.match(/<TOTAL_AWARDS>([^<]*)<\/TOTAL_AWARDS>/)) {
            judgeData.totalAwards = line;
        } else if (line.match(/<TOTAL_DECISIONS>([^<]*)<\/TOTAL_DECISIONS>/)) {
            judgeData.totalDecisions = line;
        } else if (line.match(/<TOTAL_DENIALS>([^<]*)<\/TOTAL_DENIALS>/)) {
            judgeData.totalDenials = line;
        } else if (line.match(/<TOTAL_DISPOSITIONS>([^<]*)<\/TOTAL_DISPOSITIONS>/)) {
            judgeData.totalDispositions = line;
            judgeArray[i] = judgeData;
            i++;
        }
        //This still doesn't work correctly. look into it. 
        
    }
    console.log(judgeArray)
        
    
}

console.log(buildObjects())

