
const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 8080;
const openai = require('./routes/openaiRoutes.js')


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname, 'public')))

app.use('/openai', openai);

app.listen(port, () => console.log(`Server starded on port ${port}`));