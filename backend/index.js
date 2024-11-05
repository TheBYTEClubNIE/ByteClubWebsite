const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 8000;

app.get("/home", (req, res) => {
    res.send("This is BYTE Club Backend");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
