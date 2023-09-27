console.log("rishabh");

// // Mongodb vs SQL 
// // Whether MongoDB is better than MySQL or vice versa depends on the specific use case and requirements of your application. Both MongoDB and MySQL are capable database systems, but they have different characteristics and are better suited for different scenarios. Here are some factors to consider when choosing between MongoDB and MySQL:

// // Data Model:

// // MongoDB is a NoSQL database that uses a document-oriented data model. It is ideal for handling semi-structured or unstructured data and is particularly well-suited for use cases with rapidly changing schemas.
// // MySQL is a relational database that uses a tabular data model. It is suitable for structured data with well-defined schemas and relationships between tables.

// // Scalability:
// MongoDB is known for its horizontal scalability. It can easily handle large amounts of data and high traffic loads by distributing data across multiple servers or clusters.
// MySQL can also scale horizontally but typically requires more effort and planning to achieve the same level of scalability as MongoDB.
// Schema Flexibility:

// MongoDB allows you to change the structure of documents on the fly, making it flexible for evolving data requirements.
// MySQL requires you to define a fixed schema upfront, which can be less flexible when your data model changes frequently.
// Complex Queries:

// MySQL's relational nature makes it well-suited for complex queries that involve multiple tables and complex joins.
// MongoDB can handle complex queries, but its query language is different, and some types of queries may require denormalization or multiple queries to achieve the same results.
// ACID Compliance:

// MySQL is ACID-compliant by default, ensuring strong data consistency and reliability, which is important for applications that require transactions.
// MongoDB provides tunable consistency levels but may not provide the same level of consistency guarantees as MySQL for certain operations.
// Community and Ecosystem:

// Both MongoDB and MySQL have large and active communities, as well as a wide range of tools, libraries, and integrations available.
// The choice may depend on the specific programming language, framework, or ecosystem you are using.
// Use Cases:

// MongoDB is often preferred for applications like content management systems, real-time analytics, IoT data storage, and projects where schema flexibility and scalability are crucial.
// MySQL is a solid choice for applications like e-commerce platforms, financial systems, and applications with well-defined and stable data models.



// mongodb and mongoose difference 
// MongoDB and Mongoose are related but distinct concepts in the context of building applications with MongoDB as the database. MongoDB is a NoSQL database, while Mongoose is an Object Data Modeling (ODM) library for MongoDB. Here are the key differences between MongoDB and Mongoose:

// MongoDB:
// Database: MongoDB is a NoSQL database system that stores data in a flexible, schema-less format called BSON (Binary JSON).

// Core Functionality: MongoDB provides the core database functionality, including data storage, retrieval, and manipulation. It offers a rich query language for interacting with data.

// Mongoose:
// Library: Mongoose is a JavaScript library and ODM for MongoDB. It provides a higher-level, more structured way to work with MongoDB from Node.js applications.

// Schema: Mongoose allows you to define a schema for your data, which specifies the structure and types of documents in a collection. This can add a level of data validation and structure on top of MongoDB's schema-less nature.

// Middleware: Mongoose allows you to define middleware functions that can intercept and modify the data before or after it's saved to the database. This is useful for tasks like validation, data transformation, and more.

// Model: Mongoose lets you define models for your data, which are JavaScript classes that correspond to MongoDB collections. These models provide a way to interact with the database using an object-oriented approach.

// Validation: Mongoose supports data validation, allowing you to define rules for the data in your schema and ensuring that only valid data is stored in the database.


// const mongoose = require('mongoose');


// importing the model created for the collection in mongodb database 
// const firstmodel = require('./model/usermodel')


// make the connection with the database with entering password in the string and also adding database name before the questionmark and we dont have to remove the question mark 

// mongoose.connect("mongodb+srv://Rishabh:Rishabh@cluster0.u8tqabd.mongodb.net/database?retryWrites=true&w=majority").then(()=>{
//     console.log("connection successful");
// })
// .catch((err)=>{
//  console.log("error is " , err);
// })

// create the one instance of the firstmodel

// const newfirstmodel = new firstmodel({
//     name: 'LOhn Doe',
//     email: 'john@example.com',
//     age: 30,
// });


// saving that instance into the database using .save command 

// newfirstmodel.save().
// then((result)=>{
// // shows the recently saved model 
// console.log("user saved" , result);
// }).
// catch((err)=>{
// console.log("error coming" , err);
// })



// wrong 
// after making the connection we have to terminate the connection with the database also so for that we have to do the below command -:

// mongoose.connection.close().then((data)=>{
//     console.log("connection close" );
// })
// .catch((err)=>{
// console.log("error occoured" );
// })

