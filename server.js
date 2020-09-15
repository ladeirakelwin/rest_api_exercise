const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('./src/config/database.db');
const express = require('express')
const app = express()
const port = 3000
const router = require('./src/router')
const bodyParser = require('body-parser')

//Insira aqui o código da tarefa proposta!
//Apesar de não ser a melhor forma de manter um projeto, utilize apenas esse arquivo. Estamos testando!



process.on('SIGINT', ()=> {
    db.close((err) => {
        console.log("Banco encerrado com sucesso!");
        process.exit(0);
    })
})

router(app, port, db, bodyParser)

