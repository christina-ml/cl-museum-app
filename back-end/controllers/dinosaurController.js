const express = require("express");
const dinosaurs = express.Router();
const {
    getAllDinosaurs
} = require("../queries/dinosaurs.js");

// GET ALL dinosaurs
dinosaurs.get("/", async (req, res)=>{
    const allDinosaurs = await getAllDinosaurs();
    if (allDinosaurs[0]){
        res.status(200).json(allDinosaurs)
    } else {
        res.status(500).json({ error: "server error" })
    }
});

module.exports = dinosaurs;