const express = require("express");
const path = require("path");

const app = express();

app.listen(3002, () => {
    console.log("Corriendo en el port 3002");
});

//MIDDLEWARES
const staticFolder = path.resolve(__dirname, "./public");
app.use(express.static(staticFolder));

//RUTAS
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/home.html"));
});