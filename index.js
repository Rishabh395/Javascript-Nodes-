// import {x} from './app'
// console.log(x);

// import functionality does not works in node js if we want import falicity to work then 
// we have to export as an object using  export modules and 
// import using require 
// ex below -:

const app = require('./app')

console.log(app.x)



// core module -:
// using the predefined function in node js are known as core module 
// global module are those which are not needed to be imported 
// ulta hota ha non global midule me 


// create server method -:
// we can create server using the createserver method of http , http is the core module \
// in node js so we have to import the http and then we can use it to handle the \
// request and response to the sever 
// when we send the data to the server using resp.send it send the resp to the port of 
// the sever where the server is listning and then it is the work of the api to send 
// the response from there to the client side .
// the request is the create server method is handled by the api the api fetch the 
// data from the client.
// we can manage this using the express that will be introduced later 



const http = require('http');

// const sever = http.createServer((req , resp)=>{
//      resp.write("<h1>hey this is rishabh pratap singh</h1>")
//      resp.end();
// });

// we can also set header for leting know to the server which data is being send on the
// port using setHeader method 

// const sever = http.createServer((req , resp)=>{
//     resp.setHeader('Content-Type' , 'application/json');
//     resp.write(JSON.stringify(app.data));
//     resp.end();
// });

// sever.listen(4500);


// file system in node js 
// we can create a file using the file system in node js for that first we require the 
// file system then some commands are written below for creating the files 

// const fs = require('fs');

// fs.writeFileSync('sample.txt' , 'this file is created using the file system');


//  synchronous or asynchronous

// JavaScript itself is inherently synchronous and single-threaded. This means that JavaScript code is executed line by line in the order it appears in your script, and it can only do one thing at a time within a single thread of execution. This synchronous behavior is often referred to as the "main thread."

// However, JavaScript can work with asynchronous operations through various mechanisms provided by its environment (e.g., a web browser or Node.js runtime). 

// Node.js is designed to be asynchronous and non-blocking by default. This means that Node.js applications are structured to perform tasks in an asynchronous manner, allowing them to handle many concurrent connections and I/O operations efficiently without blocking the execution of other code.






