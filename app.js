const express = require('express');
const product = require('./routes/product.route'); // Imports routes for the products
const bodyParser = require('body-parser');

const app = express();


// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://melinda:melinda94@ds233763.mlab.com:33763/productstutorial';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// body - parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);


// Setup the server

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log(`Server is up and running on port 3000!`))