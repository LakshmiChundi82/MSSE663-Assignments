
import { Request, Response } from "express";


var express =require('express');
var app=express();
app.use('/',function(req:any,res:any):string{

    res.send("Welcome");
    return ' ';

});

app.listen(8000,function(){

    console.log("running");

});
