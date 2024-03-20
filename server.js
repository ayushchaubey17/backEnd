import express from "express";

let app = express();
let port = process.env.PORT || 3000;


app.use(express.static('dist'));

app.get("/api/my",(req,res)=>{
    res.send("i am response");
});

app.get("/api/name",(req,res)=>{
    res.send("my name is ayush");
});

app.listen(port,()=>{
    console.log(`listening at http://localhost:${port}`);
})