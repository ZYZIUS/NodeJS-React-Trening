const config = require("../../config/config.json");
const app = require("./server_start").app;
const path = require('path');
const express = require("./server_start").express;




function endpoints(){

    // Have Node serve the files for our built React app
    app.use(express.static(path.resolve(__dirname, '../../../client/build')));

    app.post("/api", (req, res) => {
        console.log(req.body)
        res.json("test")
    });

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../../../client/build', 'index.html'));
      });
  
}

module.exports = {endpoints};