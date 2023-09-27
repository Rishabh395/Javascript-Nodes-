console.log("rishabh");

// JWT Token 

const jwt = require('jsonwebtoken');

const secretKey = "Rishabh";

const payload = {
    data:"data" , 
    usename:"username"
}

// generate a token and send it to the client as a response 
jwt.sign(payload , secretKey  , {expiresIn : "2h"} , (err , token)=>{
    console.log(token);
})


// now the token has to verify so we are using a previously generated token and verifying it with the secretKey that is already known to the server 
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiZGF0YSIsInVzZW5hbWUiOiJ1c2VybmFtZSIsImlhdCI6MTY5NTY5NTI2NCwiZXhwIjoxNjk1NzAyNDY0fQ.TmGgtSx9MmVD0sGbWmApkKJIChStaQCV1oaSN4D9Y1E';

// Replace with the token you want to verify


jwt.verify(token, secretKey  , (err , data)=>{
    console.log(data);
});


// if any unauthoised user have a jwt token then he can access your data and signed is as you from his device 