// express js continuation -:
// express js is a framework of nodejs 
// A framework is a pre-built, reusable set of lirbaries, tools, and best practices that provides a structured way to develop software applications

const express = require('express');

// so we have impoted express now we have to create a server like create server method in node js so we have to do that in express also so for creating a server we have to run the below command  
const app = express();

// introduction about routes 
// n Express.js, routes are a fundamental concept that helps you define how your application responds to client requests. Routes determine how the application's endpoints (URL paths) are handled, what should happen when a specific URL is accessed, and how the server should respond. Express provides a flexible and organized way to define these routes.

// Here are the key aspects of routes in Express:

// HTTP Methods: Routes are associated with specific HTTP methods, such as GET, POST, PUT, DELETE, and others. Each HTTP method corresponds to a different type of request (e.g., retrieving data with GET, creating data with POST, updating data with PUT, or deleting data with DELETE).

// Route Paths: A route path defines the part of the URL that the route should match. Route paths can include parameters, which are placeholders for values that are specific to each request. For example, /users/:userId is a route path with a parameter called userId.

// Route Handlers: Route handlers are functions that define what should happen when a request matches a particular route. These functions receive the request (req) and response (res) objects as parameters and can perform various actions, such as rendering a view, sending a response, or interacting with a database.

// imp-:
// so we have one server on which various routes or we can say application end points are created so api have to take the response of these endpoints like there are various routes on the server so if some api want to fetch data from the a particular end point then he use that server end point as an api and get the data from there .



// some basic question answer -:

// APi Gateway 

// Creating various routes in Express does not mean creating multiple servers. Instead, it means defining different endpoints or paths within a single Express application that handle different types of requests. These routes are handled by a single Express server instance, making it more efficient and organized to manage different functionalities of your web application.

// In Express, you typically create one server using the express() function, and then you define multiple routes using various HTTP methods (such as GET, POST, PUT, DELETE) to handle different types of requests at different URLs.

// We have a single Express server (app) that listens on a specific port.

// We define multiple routes using different HTTP methods (GET and POST) and different URL paths ("/", "/about", "/contact").

// Each route handles specific types of requests and executes its associated route handler function when a matching request is received.

// These routes are part of the same Express application and are managed by the same server instance. This allows you to efficiently organize and structure your application to handle various functionalities without the need to create separate servers for each route. Express manages the routing and handling of incoming requests within a single server process.

console.log("rishabh"); 


// app.get('/' , (req , resp)=>{
//     resp.send("<h1>hello we are on express server</h1>");
// })

// app.get('/about' , (req , res)=>{
//     res.send("<h1>hello we are on express about server</h1>");
// })


// middleware 

// Middleware in Express is a crucial concept that allows you to add functionality to your web application's request-response cycle. Middleware functions are used to process incoming HTTP requests and outgoing responses, and they can perform various tasks such as authentication, logging, data parsing, error handling, and more. Middleware functions are executed in the order they are defined in your Express application, and they have access to the request and response objects as well as the next function, which is used to pass control to the next middleware function in the stack.

// there are some of the type of middleware that are used like 
// 1-:application middleware - that works on complete application
// 2-: middleware on diiferent routes 
// 3-: middleware using router in express

// 1-: application middleware 

// const addmiddleware=(req , resp , next)=>{
// console.log("we are using middleware");
// // if we call the next then only all the routes in the application starts working 
// next(); 
// }

// app.use(addmiddleware);

// app.get('/' , (req , resp)=>{
//     resp.send("<h1>hello we are on express server</h1>");
// })

// app.get('/about' , (req , res)=>{
//     res.send("<h1>hello we are on express about server</h1>");
// })

// if we want to add middleware in a paticular route then we can use it in the witten below manner 


// const addmiddleware=(req , resp , next)=>{
//     console.log("we are using middleware");
//     // if we call the next then only all the routes in the application starts working 
//     next(); 
//     }
    
//     app.get('/' , (req , resp)=>{
//         resp.send("<h1>hello we are on express server</h1>");
//     })
    
//     app.get('/about', addmiddleware  , (req , res)=>{
//         res.send("<h1>hello we are on express about server</h1>");
//     })



// there is one more way for adding middleware that is using router in express
// for that we have to import the router first 

const router = express.Router();
// express.Router() is a feature in Express.js that allows you to create modular and reusable sets of routes and middleware for your web application. It essentially provides a way to define a group of related routes and middleware handlers in a separate module or file, which can then be mounted into an Express application.

const addmiddleware=(req , resp , next)=>{
    console.log("we are using middleware");
    next(); 
    }

//  so here router will use the middleware 
router.use(addmiddleware);

app.get('/' , (req , resp)=>{
    resp.send("<h1>hello we are on express server</h1>");
})

router.get('/about'  , (req , res)=>{
    res.send("<h1>hello we are on express about server</h1>");
})

// To use the router in your main Express application, you "mount" it at a specific path using app.use():
app.use('/' , router);


// so app is a server that we created so we are     listening on it . it is a single server and various apis endpoint will hit on this single server 

app.listen(4500);