const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));
var faker = require('faker');


//routes 
app.get("/", function(req, res){
    res.render("index.html", {"fakerEmail":faker.internet.email(),});
});

app.get("/index", function(req, res){
    res.render("index.html", {"fakerEmail":faker.internet.email(),});
});

app.get("/phishing", function(req, res){
    res.render("phishing.html");
});

app.get("/ransomware", function(req, res){
    res.render("ransomware.html");
});
app.get("/zero", function(req, res){
    res.render("zero.html");
});


//starting server 
//app.listen("8080", "127.0.0.1", function(){
 //console.log("Express server is running...");
//});
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
});
