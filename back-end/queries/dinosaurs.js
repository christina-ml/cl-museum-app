const db = require("../db/dbConfig.js");

// GET ALL dinosaurs
const getAllDinosaurs = async () => {
    try {
        const allDinosaurs = await db.any("SELECT * FROM dinosaurs");
        return allDinosaurs;
    } catch (error) {
        return error;
    }
};

// GET ONE dinosaur
const getOneDinosaur = async (id) => {
    try {
        const oneDinosaur = await db.one("SELECT * FROM dinosaurs WHERE id=$1", id);
        return oneDinosaur;
    } catch (error) {
        return error;
    }
};

// DELETE dinosaur
const deleteDinosaur = async (id) => {
    try {
        const deletedDinosaur = await db.one("DELETE FROM dinosaurs WHERE id=$1 RETURNING *", id);
        return deletedDinosaur
    } catch (error) {
        return error;
    };
};

// POST/CREATE dinosaur
// PUT/UPDATE dinosaur

module.exports = {
    getAllDinosaurs,
    getOneDinosaur,
    deleteDinosaur
};