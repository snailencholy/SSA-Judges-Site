let fs = require('fs'),
    xml2js = require('xml2js');
 
let parser = new xml2js.Parser();
fs.readFile(__dirname + '/data.xml', function(err, data) {
    parser.parseString(data, function (err, result) {
        //console.dir(result);
        console.log('Done');
        let json = JSON.stringify(result)
        fs.writeFile(__dirname + '/judge.json', json, function(err) {
            if (err) throw err;
            console.log('saved');
        })
    });
});