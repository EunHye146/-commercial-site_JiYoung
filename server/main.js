import express from 'express';
var app = express();
import dotenv from 'dotenv';
dotenv.config();
import post from './post/index.js';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

var { PORT, MONGO_URI } = process.env;

mongoose
.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(e => {
    console.error(e);
});

app.use(bodyParser.json());

app.use('/post', post);

app.use(cors());


app.listen(PORT, function() {
    console.log('Example App listening on port ' + PORT);
});