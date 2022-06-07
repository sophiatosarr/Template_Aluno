const express = require('express'); 
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const hostname = '127.0.0.1';


const port = 3077;
const sqlite3 = require('sqlite3').verbose();
const app = express();
const DBPATH = 'sophia.db';

app.use(express.json());

app.use(express.static("../frontend"))


app.get('/sophia', (request, response) => {
    response.statusCode = 200;
    response.setHeader('Access-Control-Allow-Origin', '*'); 

    var db = new sqlite3.Database(DBPATH);
    var sql = "SELECT * FROM soso"; 
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        response.json(rows);
    });
    db.close(); // Fecha o banco
});
 


app.listen(port, hostname, () => {
    console.log(`BD server running at http://${hostname}:${port}/`);
  });