const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const path = require("path");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MySQL Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",     // Change if your MySQL password is different
    database: "event_db"
});

db.connect((err) => {
    if (err) {
        console.log("MySQL Connection Failed");
        console.log(err);
    } else {
        console.log("MySQL Connected");
    }
});

// Registration API
app.post("/register", (req, res) => {

    const { name, email, college } = req.body;

    const sql =
        "INSERT INTO registrations(name,email,college) VALUES(?,?,?)";

    db.query(sql, [name, email, college], (err, result) => {

        if (err) {
            console.log(err);

            return res.status(500).json({
                message: "Database Error"
            });
        }

        res.json({
            message: "Registration Successful"
        });

    });

});

// Start Server
app.listen(3000, () => {

    console.log("Registration Service Running On Port 3000");

});