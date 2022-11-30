const https = require('https');

var alg = [];

async function fetched() {
    await https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
      let data = '';
    
      resp.on('data', (chunk) => {
        data += chunk;
      });
    
      resp.on('end', async () => {
        console.log(JSON.parse(data));
        alg.push(JSON.parse(data))
        //retrieveData = await JSON.parse(data);
      });
    
    }).on("error", (err) => {
      console.log("Error: " + err.message);
    });

    console.log(alg);
}

fetched();

