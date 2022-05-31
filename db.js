const mongoose = require('mongoose');

var mongoURL ='mongodb+srv://Akashd18:akashdt18.@cluster0.x2xfh.mongodb.net/mern-pizza'

mongoose.connect(mongoURL,{useUnifiedTopology:true,useNewUrlParser:true})

var db = mongoose.connection

db.on('connected',()=>{
    console.log("The connection was set successully");

})
db.on ('error',()=>{
    console.log('mongo db connection failed');
})
module.exports = mongoose;