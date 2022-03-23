const path = require('path');
const fs = require('fs');
const request = require('request');
const rp = require('request-promise');

let dataPath = path.join(__dirname, 'popular-articles.json');
let popular = [];

rp('https://reddit.com/r/popular.json')
    .then((e) = body => {
        JSON.parse(body).data.children.forEach(item => {
            popular.push([
                item.data.title, 
                item.data.url, 
                item.data.author
            ]);
        })
        fs.appendFileSync(dataPath, JSON.stringify(popular));
    })
    .catch(err => console.log(err));