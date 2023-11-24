const express = require("express");
const mysql = require('mysql2');
const app = express();

res.sendFile(__dirname + '/index.html');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test'
});

function dodaj(obj,tab) {
  connection.query(query);
}

function aktaualizuj(id,obj,tab) {
  connection.query(query);
}

function usun(id,tab){
  connection.query(query);
}


function pobierz(parametr,tab) {
  if(parametr){
    parametr = 'WHERE `name` = "Page" AND `age` > 45';
  }

 let query = 'SELECT * FROM ' +tab+ 'parametr';  
  connection.query(
      query,
      function(err, results, fields) {
        console.log(results); 
        console.log(fields);
        return fields;
      }
}



app.get("/", (req, res) => {
  res.send(data());
});

app.listen(8080);
