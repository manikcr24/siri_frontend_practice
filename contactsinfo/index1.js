var express = require("express");
var app = express();

app.listen(3003);
app.use(express.json());
app.get("/home", (req,res) => {
    res.sendFile("D:/workspace/siri_frontend_practice/contactsinfo/home1.html");

})
app.post("/contacts", (req,res) =>{
    console.log(req.body);
})