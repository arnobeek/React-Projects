const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');
const PORT = 3001;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user:'root',
    host:'localhost',
    database:'password_manager',
    password:'airtel123'
})

app.post("/addinfo", (req,res)=>{
    const {password, title} = req.body;
    db.query("INSERT INTO passwords (password, title) VALUES (?,?)", [password,title], (err, result)=>{
        if (err){
            console.log(err);
        }
        else{
            res.send("Success");
        }
    })
})

app.listen(PORT, () => console.log("Server is running"))

