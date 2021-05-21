const express = require('express');
require('dotenv').config();
const app = express();
const path = require('path');
const cors = require("cors")
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json())

mongoose.connect('mongodb+srv://gckdroot:ARyGXPrkIMNwjmbO@cluster0.polvy.mongodb.net/ecoleDirecte?retryWrites=true&w=majority');

app.use(express.static('client/build'))

app.use("/", require("./routes/userRoutes"))

app.get('/*', (_, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.listen(PORT, () => {
    console.log(`Server connect at: ${PORT}`)
})