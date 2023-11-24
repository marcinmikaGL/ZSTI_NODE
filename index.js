const express = require("express");
const mysql = require('mysql2');
const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test'
});

function dodaj(obj) {

}

function aktaualizuj(id,obj) {

}

function usun(id){

}

function pobierz(parametr) {

}



app.get("/", (req, res) => {
  res.send(data());
});

app.listen(8080);
