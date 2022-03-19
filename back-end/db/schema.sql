DROP DATABASE IF EXISTS museum_dev;
CREATE DATABASE museum_dev;

\c museum_dev;

DROP TABLE IF EXISTS dinosaurs;

CREATE TABLE dinosaurs (
    id SERIAL PRIMARY KEY,
    dinosaur_id TEXT,
    name TEXT NOT NULL,
    pronunciation TEXT,
    meaning_of_name TEXT,
    diet TEXT,
    length_in_meters INT DEFAULT 0,
    period TEXT,
    mya_born SMALLINT,
    mya_died SMALLINT,
    description TEXT,
    is_favorite BOOLEAN
);