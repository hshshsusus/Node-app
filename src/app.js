const express = require("express");
const app = express();
const port = 7777;

app.use("/test",(req, res) => {
    res.send("98745632npm s");
})

app.listen(port, () =>{
    console.log(`server is running on ${port}...`)
})