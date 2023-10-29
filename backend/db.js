const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
// const mongoURI = "mongodb://127.0.0.1:27017/new1b?directConnection=true"
// const mongoURI = "mongodb+srv://suhailhamid608:Gs8EouT9vGN3WBfS@cluster1.us0tjco.mongodb.net/?retryWrites=true&w=majority"
// const mongoURI = "mongodb+srv://suhailhamid71:a03WgkMJB4IRx1HG@cluster0.1xvndpy.mongodb.net/?retryWrites=true&w=majority"
// const mongoURI = "mongodb+srv://suhailhamid71:6VL8kmNWQcYAr1sq@cluster0.thj8kip.mongodb.net/?retryWrites=true&w=majority"
const mongoURI = "mongodb+srv://suhail:suhail@cluster0.ismtpw2.mongodb.net/?retryWrites=true&w=majority"





const connectToMongo = () => {
    mongoose.connect(mongoURI, {
        useNewUrlParser : true, 
        // useCreateIndex : true, 
        // useUnifiedTopology : true, 
        // useFindAndModify : false
    })
    .then(() => console.log("connected successfully"))
    .catch((err) => {console.error(err);});
}

module.exports = connectToMongo;  

// mongodb project1 password Gs8EouT9vGN3WBfS and username suhailhamid608
// mongodb password a03WgkMJB4IRx1HG
 // new mongoDbtest(project) password 6VL8kmNWQcYAr1sq
 // password notesmern   dTbyBoECH5bp9OTt
//  mongodb+srv://suhailhamid71:TbyBoECH5bp9OTt@cluster0.7fbjuxb.mongodb.net/


//suhailhamid806        apJPYFty1DB0dEIm