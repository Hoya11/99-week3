const mongoose = require("mongoose");


const connect = () =>{
    mongoose.connect("mongodb://localhost:27017/99-week3").catch((err) => {
        console.error(err);
    });
};

module.exports = connect;