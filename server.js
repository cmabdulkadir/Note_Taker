const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

const PORT =process.env.PORT || 4000;

// sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

// Required route file
require("./routes/routes.js")(app);

// listener to start the server
app.listen(PORT, function(){
    console.log("App listening localhost: " + PORT)
})


