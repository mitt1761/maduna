require('dotenv').config();

const mysql = require('mysql2');

const db = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    ssl: {
        rejectUnauthorized: false
    }
});

db.getConnection((err, connection) => {
    if (err) {
        console.error("Gagal konek Aiven:", err);
    } else {
        console.log("Berhasil konek Aiven");
        connection.release();
    }
});

module.exports = db;
