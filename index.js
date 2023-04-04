const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const ExpeditionRoute = require('./routes/ExpeditionRoute');

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

// connect db
mongoose.connect(`${process.env.MONGODB_URI}`)
    .then(() => console.log('Database is connected'))
    .catch(err => console.log(err));

app.use('/expeditions', ExpeditionRoute);

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));