const e = require("cors");
const express = require("express");
const dinosaurs = express.Router();
const {
    getAllDinosaurs,
    getOneDinosaur,
    deleteDinosaur
} = require("../queries/dinosaurs.js");

// GET ALL dinosaurs
dinosaurs.get("/", async (req, res)=>{
    const allDinosaurs = await getAllDinosaurs();
    if (allDinosaurs[0]){
        res.status(200).json(allDinosaurs);
    } else {
        res.status(500).json({ error: "server error" });
    }
});

// GET ONE dinosaur
dinosaurs.get("/:id", async (req, res)=>{
    const { id } = req.params;
    const oneDinosaur = await getOneDinosaur(id);
    if (oneDinosaur.id){
        res.status(200).json(oneDinosaur);
    } else {
        res.status(404).json({ error: "dinosaur not found" });
    }
});

// DELETE dinosaur
dinosaurs.delete("/:id", async (req, res)=>{
    const { id } = req.params;
    const deletedDinosaur = await deleteDinosaur(id);
    if (deletedDinosaur.id){
        res.status(200).json(deletedDinosaur);
    } else {
        res.status(404).json({ error: "dinosaur not found" });
    }
});

// POST/CREATE dinosaur
// PUT/UPDATE dinosaur

module.exports = dinosaurs;