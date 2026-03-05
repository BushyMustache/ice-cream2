// import the express module
import express from 'express';

// import the mysql2 module
import mysql2 from 'mysql2';

// import the dotenv module
import dotenv from 'dotenv';

// load the environment variables from .env file
dotenv.config();

// create an instance of express 
const app = express();

// define port
const PORT = 8000;

// set up view engine
app.set('view engine', 'ejs');

// create a database connection pool with multiple connections
app.use(express.urlencoded({extended: true}));

const pool = mysql2.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
}).promise();

app.get('/db-test', async (req, res) => {
    try {
        const orders = await pool.query('SELECT * FROM orders');
        res.send(orders[0]);
    } catch (err) {
        console.error('Database error:', err);
        res.status(500).send('Database error: ' + err.message);
    }
});

app.use(express.static('public'));
const orders = [];

// define default route

app.get('/', (req,res)=> {
     res.render('home');
   // res.send('welcom to our ice cream shop')
});
app.get('/admin', (req, res) => {
  res.render('admin', { orders });
});

app.post('/submit-order', (req, res) => {

  const order = {
    name: req.body.name,
    email: req.body.email,
    flavor: req.body.flavor,
    cone: req.body.cone,
    toppings: req.body.toppings ? req.body.toppings : "none",
    comments: req.body.comments,

    timestamp: new Date()
  };
  orders.push(order);
  res.render('confirmation', { order });



});


app.listen(PORT,()=> {
    console.log(`Server is running at http://localhost:${PORT}`);
});