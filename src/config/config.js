require("dotenv").config();

module.exports = {
    mongodbURL: process.env.MONGO_DB_URL || 'mongodb://localhost:27027/general',
    port: process.env.PORT || 5000,
    appUrl: "http://localhost:5000",
    mode: process.env.NODE_ENV || "production"
};