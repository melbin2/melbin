const mongoose = require('mongoose');
 mongoose.connect("mongodb+srv://melbinbennyoffl:melbin@cluster0.xsit3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
 .then(() => {
    console.log('Connected!')
 });