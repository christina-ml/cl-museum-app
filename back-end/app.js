// Dependencies
const cors = require("cors");
const express = require("express");
const dinosaurController = require("./controllers/dinosaurController.js");

// Configuration
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/dinosaurs", dinosaurController);

// Routes
app.get("/", (req, res)=>{
    res.send("Hello, museum app backend!")
})

app.get("*", (req, res)=>{
    res.status(404).send("404 - page not found")
})

// Export
module.exports = app;