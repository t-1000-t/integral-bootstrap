const mongoose = require("mongoose");
const {mongodbURL} = require("../config/config");

const options = {
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true
};

module.exports = async () => {
    try {
        await mongoose.connect(mongodbURL, options)
        console.log("Connected DB...")
    } catch (error) {
        console.log("MongoDB connecting error:", error);
        process.exit(1);
    }
};