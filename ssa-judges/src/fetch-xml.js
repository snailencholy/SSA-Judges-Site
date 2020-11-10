const { dir } = require('console');
let fs = require('fs');
let https = require('https');
let xml2js = require('xml2js');

let file_name = 'data.xml'

let DOWNLOAD_DIR = __dirname+'/';

function download() {
    let xml = ''
    let parser = new xml2js.Parser();
    let file_url='https://www.ssa.gov/appeals/DataSets/03_ALJ_Disposition_Data.xml'
    let data = https.get(file_url, (response) => {
       //let data = response.pipe(file);
       response.on('data', function (chunk) {
           xml += chunk;
       })
       response.on('end', function() {
            parser.parseString(xml, (err, result) => {
                let json = JSON.stringify(result)
                fs.writeFile(__dirname + '/judge.json', json, function(err) {
                    if (err) throw err;
                    console.log('saved')
                })
            })
       })
    })

    //console.log(xml);

};

download();

