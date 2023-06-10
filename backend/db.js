const mongoose = require('mongoose');

// mongoose.set('strictQuery', false);
const mongoURI = "mongodb://127.0.0.1:27017/new1b?directConnection=true"

const connectToMongo = () => {
    mongoose.connect(mongoURI)
    .then(() => console.log("connected successfully"))
    .catch((err) => {console.error(err);});
}

module.exports = connectToMongo;
 