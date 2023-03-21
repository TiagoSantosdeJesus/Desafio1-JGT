async function connect(){
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:senha@localhost:3306/upconsult");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}