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

module.exports = {
    getAllDinosaurs
};