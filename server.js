const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send("APP RUNNG");
});

app.listen(port, () => {
    console.log("Server is runing on port " + port);
})