//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();
let items = ["Buy Food","Cook Food","Eat Food"];
let workItems = [];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({exteded: true}));
app.use (express.static("public"));
app.get("/", function(req, res) {

let day = date();
  res.render("list", {listTitle: day,newListItems:items});
});
app.post("/",function(req,res){
let item = req.body.newItem;
  if(req.body.list === "Work")
  {
    console.log(req.body);
    workItems.push(item);
    res.redirect("/work");
  }
  else{
    items.push(item);
    res.redirect("/");

  }

});

app.get("/work",function(req,res){
  res.render("list",{listTitle:"Work list",newListItems: workItems});
});
// app.post("/work",function(req,res){
// let item = req.body.newItem;
// workItem.push(item);
// res.redirect("/work");
// });
app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
