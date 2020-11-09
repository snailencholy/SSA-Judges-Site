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
    let file = fs.createWriteStream(DOWNLOAD_DIR + file_name, {'flags': 'w'});
    let data = https.get(file_url, (response) => {
       //let data = response.pipe(file);
       response.on('data', function (chunk) {
           xml += chunk;
       })
       response.on('end', function() {
           console.log(xml)
           //This actually gets the data I'm looking for
           //Try and parse this. See where that gets you.
       })
    })

    console.log(xml);
    

    //fs.writeFileSync(DOWNLOAD_DIR + file_name, data);
    // let file = fs.createWriteStream(DOWNLOAD_DIR + file_name, {'flags': 'w'});
    // let data = https.get(file_url, function(response) {
    //     let data = response.pipe(file);
        
    //     console.log(data)
    //     //return response;
    // });
    // parser.parseString(data, (err, result) => {
    //     let json = JSON.stringify(result)
    //     console.log(json);
    // })

};

download();

// const read = async () => {

//     let parser = new xml2js.Parser();

//     const response = await download();
    
//     if(!response.ok) {
//         throw new Error("Didn't work")
//     } else {
//         fs.readFile(__dirname + '/data.xml', function(err, data) {
//             parser.parseString(data, function(err, result) {
//                 console.log(result);
//                 console.log('done');
//                 let json = JSON.stringify(result);
//                 fs.writeFile(__dirname + '/judge.json', json, function(err) {
//                     if (err) throw err;
//                     console.log('saved')
//                 })
//             })
//         })
//     }
// }


// function read() {
//     download();
//     let parser = new xml2js.Parser();
// fs.readFile(__dirname + '/data.xml', function(err, data) {
//     parser.parseString(data, function (err, result) {
//         //console.dir(result);
//         console.log(result);
//         console.log('Done');
//         let json = JSON.stringify(result)
//         fs.writeFile(__dirname + '/judge.json', json, function(err) {
//             if (err) throw err;
//             console.log('saved');
//         })
//     });
// });
// }

