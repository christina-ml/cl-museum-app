// Dependencies
const cors = require("cors");
const express = require("express");

// Configuration
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res)=>{
    res.send("Hello, museum app backend!")
})

app.get("*", (req, res)=>{
    res.status(404).send("404 - page not found")
})

// Export
module.exports = app;