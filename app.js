const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

process.setMaxListeners(0);

// DB config
require('./config/db');

const app = express();

const poll = require('./routes/poll');

// Set public folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Enable cors
app.use(cors());

// When URL is set to /poll, get data from the poll file.
app.use('/poll', poll);

const port = 3000;

app.listen(port, () => {
	'Hello';
});
