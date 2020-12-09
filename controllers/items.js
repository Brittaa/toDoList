const date= require('../generateDate.js');
//const Task = require('../models/task');
const mongoose = require('mongoose');

const Task = mongoose.model('Task');
//let toDoList = []; //globaalne muutuja, et ei läheks tühjaks post-is

exports.getMainPage = (req, res)=>{
    let day= date.getDate();
    Task.find((error, tasks) =>{
       if(!error){
        res.render("index.ejs", {date: day, toDoItems: tasks});
       } else {
           console.log("Failed to retireve data: ", error);
       }
    });



    /*Task.fetchTasks(items=>{
        let day= date.getDate();
        res.render("index.ejs", {date: day, toDoItems: itemsList});
    })
    //let day =date(); //kutsume funktisooni välja
    //let day= date.getDate();
    //const itemsList = Task.fetchTasks();

    /*let weekday = date.getWeekDay();
    console.log(day);*/
    
};

exports.postNewItem = (req, res)=>{

    const item = req.body.newTask;
    let newTask = new Task();
    newTask.description = item;

    newTask.save((error, response)=> {
        if(!error){
            res.redirect('/');
        } else {
            console.log(error);
        }
    });
    
    /*item.saveTask();

    /*let newTask = req.body.newTask;
    toDoList.push(newTask); //lisab elemendi massiivi sisse
    //=== kontrollib tüüpi ja väärtust
    console.log(newTask); */

    //res.redirect("/"); //suuname tagasi pealehele
};
exports.deleteItem = (req,res)=>{
    console.log("Call from to delete",req.body.checkbox);
    const checkedItemId = req.body.checkbox;

    Task.findByIdAndRemove(checkedItemId, function(error) {
        if(!error){
            console.log("Successfully deleted the item.");
            res.redirect("/");
        } else {
            console.log(error);
        }
    });


    //Task.deleteItem(req.body.checkbox);
   // res.redirect('/');
}