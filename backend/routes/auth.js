const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');      // To give token to user

var fetchuser = require('../middleware/fetchuser');


const JWT_SECRET = "Thenameof$oy";
// const {getAllProducts, getAllProductsTesting} = require("../models/User");

// router.route("/").get(getAllProducts);
// router.route("/testing").get(getAllProductsTesting);

// REGISTER

router.post('/register',[
    body('name', "Enter a valid name"),
    body('email', "Enter a valid email"), 
    body('password', "Enter a valid password"),
], async(req, res) => {

  let success = false;
  // If there are errors return the bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, errors: errors.array() });
  }

    try {
        // Check wheather the user with the same email exits already
        let user = await User.findOne({ email : req.body.email });

        // console.log(user)
        if (user) {
          return res.status(400).json({error: "Sorry a user with this email already exists" })
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt)

    

     user = await User.create({
        name : req.body.name,
        email : req.body.email,
        password : secPass
    })

    const data = {
        user : {
            id : user.id
        }
    }

    const authToken = jwt.sign(data, JWT_SECRET);
    success = true;
    res.json({success, authToken});

} catch (error) {

    console.error(error.message);
    res.status(500).send("Internal server Error");

  }

});



// LOGIN

router.post('/login', [
    body('email', "Enter a valid email").isEmail(),
    body('password', "Password can't be blank").exists(),
  
  
  
  ], async (req, res) => {

    let success = false;
    // If there are errors return the bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {email, password} = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {

          return res.status(400).json({ error: "Please try to login with corrrect credentials" });
        }

        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
          
          return res.status(500).json({passwordCompare, error: "Please try to login with corrrect credentials" });
    
        }

        const data = {
            user : {
              id : user.id
            }
          }

          const authToken = jwt.sign(data, JWT_SECRET);

          success = true;
          res.json({success, authToken});


    } catch (error) {

        console.error(error.message);
        res.status(500).send("Internal server Error hello");
    
      }

  });


  router.post('/getuser', fetchuser, async (req, res) => {

    try {
      const userId = req.user.id;
      const user = await User.findById(userId).select("-password");
      res.send(user);
    } catch (error) {
  
      console.error(error.message);
      res.status(500).send("Internal server Error");
    }
  })

module.exports = router;