const express = require("express");
const app=express();
const path = require("path");
const port = process.env.PORT || 8000;

const staticPath=path.join(__dirname,"../public");

app.use(express.static(staticPath));
app.get("/",(req,res)=>{
    res.send("welcome");
});
app.listen(port, ()=>{
    console.log('listning the port at ${{port}}')
});