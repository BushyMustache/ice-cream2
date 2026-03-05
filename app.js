// import the express module
import express from 'express';

// create an instance of express 
const app = express();

// define port
const PORT = 8000;

//set up view engine
app.set('view engine', 'ejs');

//middleware to parse incoming request bodies
app.use(express.urlencoded({extended: true}));

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