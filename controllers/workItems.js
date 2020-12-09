const date= require('../generateDate.js');
const mongoose = require('mongoose');
const Task = mongoose.model('Task');

//let toDoList = []; //globaalne muutuja, et ei läheks tühjaks post-is

exports.getWorkItems = (req, res)=>{
    let day= date.getDate();
    Task.find((error, workList) =>{
       if(!error){
        res.render("work.ejs", {date: day, workItems: workList});
       } else {
           console.log("Failed to retireve data: ", error);
       }
    });
    /*Task.fetchTasks(workItems=>{
        let day =date.getDate();
        res.render("work.ejs",{date: day, toDoItems:workItems});
    }); ///items=callback
    /*let day= date.getDate();
    const workList = Task.fetchTasks();
    /*let weekday = date.getWeekDay();
    console.log(day);
    res.render("work.ejs", {date: day, workItems: workList});*/
};

exports.postWorkItems = (req, res)=>{
    const item = req.body.newTask;
    let newTask = new Task();
    newTask.description = item;

    newTask.save((error, response)=> {
        if(!error){
            res.redirect('/work');
        } else {
            console.log(error);
        }
    });


    /*let newTask = req.body.newTask;
    toDoList.push(newTask); //lisab elemendi massiivi sisse
    //=== kontrollib tüüpi ja väärtust
    console.log(newTask);

    res.redirect("/work");*/ //suuname tagasi pealehele
};


exports.deleteWork = (req,res)=>{
    console.log("Call from to delete",req.body.checkbox);
    const checkedItemId = req.body.checkbox;

    Task.findByIdAndRemove(checkedItemId, function(error) {
        if(!error){
            console.log("Successfully deleted the item.");
            res.redirect("/work");
        } else {
            console.log(error);
        }
    });

}