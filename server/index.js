const express = require ('express')
const app =express()
const port = 8000
const cors = require('cors');
app.use(cors());
app.use(express.json());

const mysql =require ('mysql2');
const connection = mysql.createConnection({
    host:'localhost' ,
    user:'root',
    password:'',
    database:'patient_prediction' 
});
app.get('/patients',(req,res)=>{
    connection.execute(`SELECT * FROM patient`, (error, result, meta)=>{
        if(error){
            res.json({message:"Query error", Error: error})
        }else{
            res.json({message:"Done", Data:result})
        }
    })
})

app.post('/prediction',(req,res)=>{
const q = "INSERT INTO patient (`name`,`age`,`gender`,`cholesterol`,`gluc`,`smoke`,`alco`,`active`,`bmi`,`MBP`) VALUES (?)";
const values=[
    req.body.name,
    req.body.age,
    req.body.gender,
    req.body.cholesterol,
    req.body.gluc,
    req.body.smoke,
    req.body.alco,
    req.body.active,
    req.body.bmi,
    req.body.MBP,
];
connection.query(q,[values], (err,data) =>{
    if (err) return res.json(err);
    return res.json("Done")
})
})

app.listen(port, ()=> console.log(`Listening . . . . . . on port ${port}`));