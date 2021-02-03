require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connect } = require('./src/db');

const port = process.env.PORT || 8080;

const app = express();
connect();

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`)
});