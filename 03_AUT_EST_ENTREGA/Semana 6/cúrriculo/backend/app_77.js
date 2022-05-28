const express = require('express'); 
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const hostname = '127.0.0.1';


const port = 3077;
const sqlite3 = require('sqlite3').verbose();
const app = express();
const DBPATH = 'sophia.db';

app.use(express.static)
