const express=require("express");
const app=express();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

let Clss;
let dob;
app.set("view engine","ejs");
app.get("/",function(req,res)
{
    res.sendFile(__dirname+"/index.html");
})


app.post("/",function(req,res)
{
    Clss=req.body.Class;
    dob=req.body.DOB;
    var Name;
    var dateof;
    var Rank;
    var Marks;
    var Percentage;


    var din=new Date();
    var objects={
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    };
    if(Clss==6 && dob=="2023-01-11")
    {
        Name="Aditya Thakur";
        dateof="2023-01-11";
        Rank="1";
        Marks="25";
        Percentage="-";
        res.render("index",{CurrentDay: din.toLocaleDateString("hi-IN",objects),name:Name,dob:dateof,marks:Marks,rank:Rank,percent:Percentage})
    }
    else if(Clss==8 && dob=="2007-12-21")
    {
        Name="Udit Singh";
        dateof="21-12-2007";
        Rank="3";
        Marks="16.5";
        Percentage="55%";
        res.render("index",{CurrentDay: din.toLocaleDateString("hi-IN",objects),name:Name,dob:dateof,marks:Marks,rank:Rank,percent:Percentage})
    }
    else if(Clss==7 && dob=="2007-12-21")
    {
        Name="Rishabh Sengar";
        dateof="21-12-2007";
        Rank="3";
        Marks="16.5";
        Percentage="55%";
        res.render("index",{CurrentDay: din.toLocaleDateString("hi-IN",objects),name:Name,dob:dateof,marks:Marks,rank:Rank,percent:Percentage})
    }
    else if(Clss==8 && dob=="2004-12-30")
    {
        Name="Pushpendra Thakur";
        dateof="30-12-2004";
        Rank="1";
        Marks="23";
        Percentage="76.67%";
        res.render("index",{CurrentDay: din.toLocaleDateString("hi-IN",objects),name:Name,dob:dateof,marks:Marks,rank:Rank,percent:Percentage})
    }
    else if(Clss==8 && dob=="2010-09-29")
    {
        Name="Prince Sengar";
        dateof="21-12-2007";
        Rank="4";
        Marks="16";
        Percentage="53.33%";
        res.render("index",{CurrentDay: din.toLocaleDateString("hi-IN",objects),name:Name,dob:dateof,marks:Marks,rank:Rank,percent:Percentage})
    }
    else if(Clss==8 && dob=="2001-01-01")
    {
        Name="Divy Pratap Singh";
        dateof="01-01-2001";
        Rank="4";
        Marks="16";
        Percentage="53.33%";
        res.render("index",{CurrentDay: din.toLocaleDateString("hi-IN",objects),name:Name,dob:dateof,marks:Marks,rank:Rank,percent:Percentage})
    }
    else if(Clss==8 && dob=="2009-10-05")
    {
        Name="Yogavansh Raj Singh";
        dateof="05-10-2009";
        Rank="2";
        Marks="22";
        Percentage="73.33%";
        res.render("index",{CurrentDay: din.toLocaleDateString("hi-IN",objects),name:Name,dob:dateof,marks:Marks,rank:Rank,percent:Percentage})
    }
    else
    {
        res.sendFile(__dirname+"/failure.html");
    }
})

app.post("/failure",function(req,res)
{
    res.redirect("/");
})

// app.post("/Pdf",function(req,res)
// {
//     res.sendFile(__dirname+"/Prince Sengar.pdf");
// })

app.post("/answerscript",function(req,res)
{
    if(Clss==8 && dob=="2007-12-21")
    {
    res.sendFile(__dirname+"/Udit Singh.pdf");
    }
    else if(Clss==8 && dob=="2009-10-05")
{
    res.sendFile(__dirname+"/Yogavansh Raj Singh.pdf");
}
else if(Clss==8 && dob=="2001-01-01")
{
    res.sendFile(__dirname+"/Divy Pratap Singh.pdf");
}
else if(Clss==8 && dob=="2010-09-29")
{
    res.sendFile(__dirname+"/Prince Sengar.pdf");
}
else if(Clss==8 && dob=="2004-12-30")
{
    res.sendFile(__dirname+"/Pushpendra Thakur.pdf");
}
else if(Clss==6 && dob=="2004-12-30")
{
    res.sendFile(__dirname+"/Pushpendra Thakur.pdf");
}
else if(Clss==7 && dob=="2004-12-30")
{
    res.sendFile(__dirname+"/Pushpendra Thakur.pdf");
}
else{
    res.sendFile(__dirname+"/failure.html");
}
})


















app.listen(process.env.PORT || 3000,function()
{
    console.log("SErver is running on the port 3000")
})