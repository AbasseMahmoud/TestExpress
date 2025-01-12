const express = require('express');

const {v4:uuidv4}=require("uuid");

const port =  8000
const app = express()

students = [
    {
        "id":uuidv4(),
        "nom":"Barry",
        "prenom":"Mahmoud",
        "Adresse":"Tanaff",
        "Telephone":78453412,
    },
    {
        "id":uuidv4(),
        "nom":"Barry",
        "prenom":"Mahmoud",
        "Adresse":"Tanaff",
        "Telephone":78453412,
    },
    {
        "id":uuidv4(),
        "nom":"Barry",
        "prenom":"Mahmoud",
        "Adresse":"Tanaff",
        "Telephone":78453412,
    },
]

app.get('/students',(req,res) =>{
    res.status(200).json(students);
})
// Lancement sur la navigateur
app.get('/',(req,res) =>{
    res.send('Bienvue')
});

app.listen(port,()=>{
    console.log(`Démarrage au port http://localhost:${port}`)
})