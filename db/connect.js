const mongoose = require('mongoose');

db = async () => {
    try{
        mongoose.set('strictQuery', true);
        await mongoose.connect(`${process.env.MONGODB_URL}`);
        console.log('DB connection established...')
    }catch(error){
        console.log('Error while connecting DB: ', error)
    }
}

module.exports = db;