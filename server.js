const express = require("express");
const db = require("./db");
const Pizza = require("./models/pizzaModel");
const path = require('path')
const pizzasRoute = require("./routes/pizzasRoute");
const userRoute=require('./routes/userRoute') 
const orderRoutes=require('./routes/orderRoutes')

const app = express();
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("server Working!!!" + port);
// });

app.use("/api/pizzas/", pizzasRoute);
app.use('/api/users/' ,userRoute)
app.use("/api/orders/",orderRoutes)

if(process.env.NODE_ENV ==='production')
{
    app.use('/' , express.static('client/build'))

    app.get('*' , (req , res)=>{

        res.sendFile(path.resolve(__dirname  , 'client/build/index.html'))

    })
}



const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});