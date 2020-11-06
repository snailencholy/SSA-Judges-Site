let fs = require('fs');
let https = require('https');
let xml2js = require('xml2js');

let file_name = 'data.xml'

let DOWNLOAD_DIR = __dirname+'/';

function download() {
    let file_url='https://www.ssa.gov/appeals/DataSets/03_ALJ_Disposition_Data.xml'
    let file = fs.createWriteStream(DOWNLOAD_DIR + file_name, {'flags': 'w'});
    const request = https.get(file_url, function(response) {
        response.pipe(file);
        //console.log(response)
    });
    //console.log(request);
}

function read() {
    let parser = new xml2js.Parser();
fs.readFile(__dirname + '/data.xml', function(err, data) {
    parser.parseString(data, function (err, result) {
        //console.dir(result);
        console.log(result);
        console.log('Done');
        let json = JSON.stringify(result)
        fs.writeFile(__dirname + '/judge.json', json, function(err) {
            if (err) throw err;
            console.log('saved');
        })
    });
});
}

download();
//setTimeout(500);
read();