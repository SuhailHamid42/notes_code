var jwt = require('jsonwebtoken'); 
const JWT_SECRET = "Thenameof$oy";


const fetchuser = (req, res, next) =>{
    // Get the user from the jwt token and add id to req object
    const token = req.header("auth-token");
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ3MmQ3YTI3MTg2ZDgxNzJjMTJhYjZhIn0sImlhdCI6MTY4NTg1OTY4OH0.JAp-km51KirD0P5MlwFxSzfO7UtTaW7FXz5T1Wno5ms";

    // if(!token){
    //     res.status(401).send({error : "Please authenticate using a valid token"})
    // }
    

    try{

    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next()
    }catch(error){

        res.status(401).send({error : "Please authenticate using a valid token"});
    }
}

module.exports = fetchuser;