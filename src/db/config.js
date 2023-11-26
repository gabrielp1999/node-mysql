const mysql = require("mysql2")

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'souza_db'
})


module.exports = conn;