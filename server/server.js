let path = require('path');
let fs = require('fs');
let request = require('request');

let dataPath = path.join(__dirname, '../chirps.json');

fs.readFile(dataPath, 'utf8', (err, data) => {

    let chirps = JSON.parse(data);
    console.log(chirps);

});