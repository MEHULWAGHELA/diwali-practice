require('dotenv').config();
const { API_PORT } = process.env
const express = require('express');
const app = express();
const PORT = 8000;
const bodyparser = require('body-parser')
const router = require("./router/router")
const db = require('./db/db')
/* first Data base */
db();

app.use(bodyparser.urlencoded({ extended: false }))
app.use(express.json())

/* second routing */
app.use("/user", router)
app.listen(API_PORT || PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
