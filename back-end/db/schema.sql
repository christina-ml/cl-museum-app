DROP DATABASE IF EXISTS museum_dev;
CREATE DATABASE museum_dev;

\c museum_dev;

DROP TABLE IF EXISTS dinosaurs;

CREATE TABLE dinosaurs (
    id SERIAL PRIMARY KEY,
    dinosaur_id TEXT UNIQUE NOT NULL,
    name TEXT UNIQUE NOT NULL,
    pronunciation TEXT,
    meaning_of_name TEXT,
    diet TEXT,
    length_in_meters INT DEFAULT 0,
    period TEXT,
    mya TEXT,
    description TEXT,
    is_favorite BOOLEAN,
    image TEXT
);

DROP TABLE IF EXISTS rooms;

CREATE TABLE rooms (
    rm_id SERIAL PRIMARY KEY,
    roomId TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    required_ticket_permissions BOOLEAN,
    dinosaurs TEXT,
    connects_to TEXT
);

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    uid SERIAL PRIMARY KEY,
    firstname TEXT,
    lastname TEXT,
    username TEXT,
    password TEXT,
    contact_email TEXT,
    phone_number TEXT,
    gender TEXT,
    age SMALLINT,
    interested_in TEXT REFERENCES dinosaurs(name),
    active_user BOOLEAN
)