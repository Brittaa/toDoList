const express = require("express");
const bodyParsr = require("body-parser");
const ejs = require("ejs");
const date = require(__dirname+"/generateDate.js");

const app = express();
app.set("view engine", ejs);
app.use(bodyParsr.urlencoded({extended: true}));
app.use(express.static("public"));  

let toDoList = []; //globaalne muutuja, et ei läheks tühjaks post-is

app.get("/", (req, res)=>{
    //let day =date(); //kutsume funktisooni välja
    let day= date.getDate();
    let weekday = date.getWeekDay();

    console.log(day);
    res.render("index.ejs", {date: weekday, toDoItems: toDoList});
});

app.post("/", (req, res)=>{

    let newTask = req.body.newTask;
    toDoList.push(newTask); //lisab elemendi massiivi sisse
    //=== kontrollib tüüpi ja väärtust
    console.log(newTask);

    res.redirect("/"); //suuname tagasi pealehele


});
app.get("/about",( req, res) => {
    res.render("about.ejs");
});

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});

