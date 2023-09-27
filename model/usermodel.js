const mongoose = require('mongoose');

const firstcollection = new mongoose.Schema({
    name : String ,
    email : String , 
    age : Number
});

const firstmodel = mongoose.model('firstcollection' , firstcollection);
module.exports = firstmodel;

// In Mongoose, a model and a collection are closely related concepts, but they are not exactly the same thing. Let me explain the differences:

// Model:

// In Mongoose, a model is a JavaScript constructor function that defines a schema for a collection in MongoDB.
// Models represent a specific type of data, such as "User," "Product," or "Post."
// When you create a Mongoose model, you're essentially defining the structure and behavior of documents that will be stored in a MongoDB collection. This includes specifying fields, data types, validation rules, and methods for working with the data.
// You interact with a collection in MongoDB through its corresponding Mongoose model. You use the model to perform CRUD (Create, Read, Update, Delete) operations on documents within that collection.
// Collection:

// A collection in MongoDB is a group of MongoDB documents that share a common structure. Collections are roughly equivalent to tables in relational databases.
// Each MongoDB document within a collection is an individual record.


