const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const router = require('./Routes/ProductRoute.js');
const cors = require('cors');

const app = express();
// Middlewares
app.use(cors());
app.use(express.static('public'))
app.use(express.static('public/images'))
app.use(express.json());
app.use(express.urlencoded({extended: false}));

 // Routes
app.use('/page',router);



app.get('/',(req,res)=>{
    res.status(200).send('Home');
});
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','serverfailed.html'));
});

mongoose.connect(`mongodb+srv://jaggujagadeesh447:n14rqoIDvZ6NDwn3@cluster0.jursg.mongodb.net/Product?retryWrites=true&w=majority&appName=Cluster0`)
    .then(()=>{
        app.listen(5000,()=>{
            console.log("Server started at Port 5000....");
        });
        console.log('Database Connected....');
    })
    .catch((error)=>{
        console.log(error);
    })
