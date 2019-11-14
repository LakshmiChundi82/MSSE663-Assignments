// "npm init" in terminal                     // Builds package.json
// "npm install express -s" in terminal       // Installs express, -s installs as standard dependency. -g would install globally
// "npm install typescript -g" in terminal    // Install TypeScript
// "npm install @types /express -s"           // Install Types
// "npm install @types/express -g"            // Install Types
// "npm install @types/express -s"            // Install Types
    
var express =require('express');
var app=express();
app.use('/',function(req,res){

    res.send("Welcome");

});

app.listen(8000,function(){

    console.log("running");

});
