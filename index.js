const express = require('express');

const {v4:uuidv4}=require("uuid");

const sqlite3 = require('sqlite3').verbose()
let sql;


// connect to DB

const db = new sqlite3.Database('Test.db',sqlite3.OPEN_READWRITE,(err)=>{
    if(err) return console.error(err.message)
})
// CREATE TABLE
// sql = `CREATE TABLE users(id INTEGER PRIMARY KEY ,first_name,last_name,username,password,email)`;
// db.run(sql)
// DROP TABLE

// db.run("DROP TABLE users");

//Inser data into table

// sql = `INSERT INTO users (first_name,last_name,username,password,email)  VALUES (?,?,?,?,?)`;
// db.run(sql,["Cheikh","KA","ka_user","test","ka@gmail.com"],(err) =>{
//     if(err) return console.error(err.message)
// })


// update 

// sql = `UPDATE users SET first_name =? WHERE id = ?`;
// db.run(sql,["Aliou",1],(err) =>{
//     if(err) return console.error(err.message)
// })

// Delete data 

// sql = `DELETE FROM  users  WHERE id = ?`;
// db.run(sql,[1],(err) =>{
//     if(err) return console.error(err.message)
// })
// Afficher les données 
sql = `SELECT * from users`
db.all(sql,[],(err,rows) =>{
    if(err) return console.error(err.message);
    rows.forEach(row => {
        console.log(row)
    });
})
const port =  8000
const app = express()






// app.get('/students',(req,res) =>{
//     res.status(200).json(students);
// })
// Lancement sur la navigateur
app.get('/',(req,res) =>{
    res.send('Bienvue')
});

app.listen(port,()=>{
    console.log(`Démarrage au port http://localhost:${port}`)
})