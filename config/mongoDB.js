const mongoose = require('mongoose');

const connectMongoDB = () =>{

    try {
        const connect = mongoose.connect(process.env.MONGODB_STRING);
        console.log(`Database Is connected`);
    } catch (error) {
        console.log(error);
    }
    
}
module.exports = connectMongoDB;