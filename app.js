const express=require("express")

const bodyparser=require("body-parser");

const router=require("./routes/list");

const app=express()

app.use(bodyparser.urlencoded({extended:true}))


app.use(express.static(__dirname + "/public"));


app.set("view engine",'ejs');


app.get('/',(req,res)=>{
    res.render("home");
})

app.use('/list',router);

app.listen(5000,()=>{
    console.log("server connected!!!");
})