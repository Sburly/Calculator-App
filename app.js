// Requirements:
const express = require("express");
const path = require("path");
const ejsMate = require("ejs-mate");

// Express app settings
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({ extended: true }));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, 'static')));

// Rendering HomePage
app.get("/", (req, res) => {
    res.render("index");
});

// Running
const port = 3000;
app.listen(port, () => {
    console.log("Calculator App running on port: http://localhost:3000");
});