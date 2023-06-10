const mongoose = require('mongoose');
const { Schema } = mongoose;


const UserSchema = new Schema({
        name:{
            type : String, 
            required : true
        },

        email:{
            type : String, 
            required : true,
            unique : true
        },

        password:{
            type : String, 
            required : true
        },

        date:{
            type : Date, 
            default : Date.now
        }
  });

  const User  = mongoose.model("user", UserSchema);

  module.exports = User;

// const getAllProducts = async(req, res) => {
//     res.status(200).json({msg : "I am in GetAllProducts"})
// };

// const getAllProductsTesting = async(req, res) => {
//     res.status(200).json({msg : "I am in GetAllProductsTesting"})
// };

// module.exports = {getAllProducts, getAllProductsTesting};