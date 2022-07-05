"use strict"
const mysql = require("mysql");

const db = mysql.createConnection({
    host: "users.crgn2ijon2kl.ap-northeast-2.rds.amazonaws.com",
    user: "admin",
    port: "3306",
    password: "tsmtech223",
    database: "login_lecture",
    // debug:true,
});

db.connect();

module.exports = db;


