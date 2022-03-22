const db = require("../db/dbConfig.js");

// GET ALL dinosaurs
const getAllDinosaurs = async () => {
    try {
        const allDinosaurs = await db.any("SELECT * FROM dinosaurs");
        return allDinosaurs;
    } catch (error) {
        return error;
    };
};

// GET ONE dinosaur
const getOneDinosaur = async (id) => {
    try {
        const oneDinosaur = await db.one("SELECT * FROM dinosaurs WHERE id=$1", id);
        return oneDinosaur;
    } catch (error) {
        return error;
    };
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
const createDinosaur = async (dinosaur) => {
    try {
        const newDinosaur = await db.one(
            "INSERT INTO dinosaurs (dinosaur_id, name, pronunciation, meaning_of_name, diet, length_in_meters, period, mya, description, is_favorite) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
            [dinosaur.dinosaur_id, dinosaur.name, dinosaur.pronunciation, dinosaur.meaning_of_name, dinosaur.diet, dinosaur.length_in_meters, dinosaur.period, dinosaur.mya, dinosaur.description, dinosaur.is_favorite]
        );
        return newDinosaur;
    } catch (error) {
        return error;
    };
};

// PUT/UPDATE dinosaur
const updateDinosaur = async (id, dinosaur) => {
    try {
        const updatedDinosaur = await db.one(
            "UPDATE dinosaurs SET dinosaur_id=$1, name=$2, pronunciation=$3, meaning_of_name=$4, diet=$5, length_in_meters=$6, period=$7, mya=$8, description=$9, is_favorite=$10 WHERE id=$11 RETURNING *",
            [dinosaur.dinosaur_id, dinosaur.name, dinosaur.pronunciation, dinosaur.meaning_of_name, dinosaur.diet, dinosaur.length_in_meters, dinosaur.period, dinosaur.mya, dinosaur.description, dinosaur.is_favorite, id]
        );
        return updatedDinosaur;
    } catch (error) {
        return error;
    };
};

module.exports = {
    getAllDinosaurs,
    getOneDinosaur,
    deleteDinosaur,
    createDinosaur,
    updateDinosaur
};