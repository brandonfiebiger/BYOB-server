const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./routes/db');

app.set('port', process.env.PORT || 3000);
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());
app.use('/api/v1', db);
app.listen(app.get('port'), () => {
  console.log(`${app.name} is running on port ${app.get('port')}.`);
});

module.exports = app;
