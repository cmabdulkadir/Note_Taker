const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 8080;

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "..", "notes.html"));
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
})

app.get("/api/notes", (req, res) => {
    fs.readFile(path.join(__dirname, "..", "..", "..", "db.json"), function(err, data){
    })
})
app.listen(PORT, () =>{
    console.log("App listening on http://localhost:" + PORT);
})

