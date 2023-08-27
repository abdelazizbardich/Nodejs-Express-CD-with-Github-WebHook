const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send("APP RUNNG");
});

app.post('/cd-deploy', (req, res) => {
    exec('sh ./cd-scripts/deploy.sh', (error, stdout, stderr) => {
        stdout ? console.log("stdout: ", stdout) : '';
        stderr ? console.log("stderr: ", stderr) : '';
        if (error !== null) {
            console.log(`exec error: ${error}`);
        }
    });
    res.send("Ok");
});

app.listen(port, () => {
    console.log("Server is runing on port " + port);
})