// Dependencies
const app = require("./app.js");

// Configuration
require("dotenv").config();

// Listen
app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})