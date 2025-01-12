const express = require('express')

const port = 8000
const app = express()

// Lancement sur la navigateur
app.get('/',(req,res) =>{
    res.send('Bienvue')
})
app.listen(port,()=>{
    console.log(`Démarrage au port http://localhost:${port}`)
})