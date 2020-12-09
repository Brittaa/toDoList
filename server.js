const express = require("express");
const bodyParsr = require("body-parser");
const ejs = require("ejs");
require('./models/db');
//const date = require(__dirname+"/generateDate.js");
const mainPage = require('./routes/main');
const about = require('./routes/about');
const getError = require('./routes/404');
const work = require('./routes/work');

const app = express();
app.set("view engine", ejs);
app.use(bodyParsr.urlencoded({extended: true}));
app.use(express.static("public"));  


/*app.get("/about",( req, res) => {
    res.render("about.ejs");
});*/

app.use(mainPage);
app.use(work);
app.use(about);
app.use(getError); // peab olema kõige viimane


app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});

