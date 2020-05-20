const db = {

        connect : async function () {
            const mysql = require('mysql2/promise')
            const connection = await mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "",
                database: 'express_tutorial'
            });
            return connection;
        }
    
    };
    
    
    module.exports = db;