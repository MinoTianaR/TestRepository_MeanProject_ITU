const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.listen(3000, () => console.log('Server started'));
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:3000/mydb', {useNewUrlParser: true});
