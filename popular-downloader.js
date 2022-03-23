const path = require('path');
const fs = require('fs');
const rp = require('request-promise');
const { url } = require('inspector');

let dataPath = path.join(__dirname, 'downloads');

rp('https://reddit.com/r/popular.json')
.then(e = body => {
    JSON.parse(body).data.children.forEach(item => {
        let articleType = path.extname(item.data.url);
        if (articleType) {
                const getFile = {
                    uri: item.data.url,
                    method: "GET",
                    encoding: null,
                    headers: {
                        "Content-type": `application/${articleType}`
                    }
                }
                rp(getFile, (err, res) => {
                    let writeStream = fs.createWriteStream(`${dataPath}/${item.data.id}.${articleType}`);
                    writeStream.write(item.data.url);
                    writeStream.end();
                })
                console.log(articleType);
            }
        })
    })
    .catch(err => console.log(err));