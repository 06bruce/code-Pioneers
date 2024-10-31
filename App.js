const express = require('express');
const { mongo, default: mongoose } = require('mongoose');
require('dotenv').config();
const path = require('path');
const router = require('./routes/router')
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

const CONN_STRING = process.env.DATABASE_CONN_URL;
mongoose.connect(CONN_STRING)
    .then(() => {
        console.log("MongoDB was successfully connected!")
        const PORT = process.env.PORT || 5000
        app.listen(PORT, () => {
            console.log(`Our App is listening on http://localhost:${PORT}`)
        })
    })
    .catch((error) => {
        console.log(`Connecting server error: ${error}`)
    })

app.use(router);