const express = require('express');
const boydParser = require('body-parser');
const bodyParser = require('body-parser');
var items = [];
let workitems = [];
const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
app.set('view engine', 'ejs');
app.get("/",function(req,res){
    var today = new Date();
    var options= {
        weekday : "long",
        day : "numeric",
        month : "long",
    };
    var day = today.toLocaleDateString("en-US",options);
    res.render("list",{ListTitle : day,newListitems:items})
})

app.get("/work",function(req,res){
    res.render("list",{ListTitle:"Work List",newListitems:workitems})
})
app.post("/work",function(req,res){
    let item = req.body.newItem;
    workitems.push(item);
    res.redirect("/work");
})


app.post("/",function(req,res){
      var item = req.body.newItem;
      items.push(item);
     res.redirect("/")
})

app.listen(3000,function(){
    console.log("Listening at port 3000");
})