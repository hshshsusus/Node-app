const express = require("express");
const app = express();
const port = 7777;

app.get("/admin", (req, res,next) =>{
   const token = "xyz";
   const isAuth = token === "xyz";
   if(!isAuth){
    res.status(404).send("unautharised access!!")
   }else{
    next();
   }
})
app.get("/admin/getAllData", (req, res) =>{
    res.send("getall data")
})
app.get("/admin/deleteUserData", (req, res) => {
    res.send("delete user")
})
app.listen(port, () =>{
    console.log(`server is running on ${port}...`)
})