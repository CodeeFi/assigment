const express = require("express");
const mongoose = require("mongoose");

const { connection } = require("./db");
const app = express();
const port = 5000;
// const db = coll()
const schema = mongoose.Schema({}, { strict: false });

const user = mongoose.model("users", schema)

app.get("/getUser", async (req, res, next) => {
    const userData = await user.find({}, {
        fullname: 1,
        email: 1,
        phone: 1
    })

    res.status(200).json(userData);

});


app.listen(port, () => {
    connection()
    console.log(`app is running in port ${port}`)
})