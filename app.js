const express = require("express");
const app = express();
const logger = require("morgan");
const config = require("./src/config/config");

require("./src/db/connectingDB")();

if (config.mode === "development") {
   app.use(logger("dev"));
}

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const optionsReactViews = { beautify: true };

app.set("views", __dirname + "/src/views");
app.set("view engine", "jsx");
app.engine(
    "jsx",
    require("express-react-views").createEngine(optionsReactViews)
);

app.get("/", (req, res) => {
   const query = req.query;
   res.render("index", query);
});


app.listen(config.port, () => {
   console.log(`Server starts on ${config.port}`);
});