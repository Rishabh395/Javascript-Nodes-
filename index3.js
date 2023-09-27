console.log("Rishabh");

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Rishabh:Rishabh@cluster0.u8tqabd.mongodb.net/database?retryWrites=true&w=majority")
.then(()=>{
    console.log("connection successful");
})
.catch(()=>{
    console.log("connection unseccessful");

})

const secondone = require('./model/secondmodel.js');




// crud operation 

// create operation 

// const newsecondone = new secondone({
//     name : "jyoti", 
//     sex : "female" , 
//     GodPray:"radha ji"
// });

// newsecondone.save()
// .then((item)=>{
//     console.log(item);
// })
// .catch((err)=>{
//     console.log(err);
// })


// Read operation 
// there are three read operation that are performed find , findone , findById ;

// FIND operaton 
// this find operation will find out all the data with matching constraints ;
// secondone.find({sex:'female'})
// .then((res)=>{
// console.log(res);
// })
// .catch((err)=>{
// console.log(err);
// })

// find by findOne 
// secondone.findOne({GodPray:'radha ji'})
// .then((res)=>{
// console.log(res);
// })
// .catch((err)=>{
// console.log(err);
// })

// Find a user by ID
// const userId = '1234567890'; // Replace with a valid user ID
// User.findById(userId)
//   .then((user) => {
//     console.log('Found user by ID:', user);
//   })
//   .catch((error) => {
//     console.error('Error finding user by ID:', error);
//   });

// update operation -:
// To update documents, you can use methods like
//  updateOne, updateMany, findOneAndUpdate, or findByIdAndUpdate.

// updateone and findOneAndUpdate works in the same way the only difference is that updateone gives the updated value and findoneandupdate gives the previousvalue without the update but update the data in the collection 


// Update a user by a specific condition (e.g., by email)
// secondone.findOneAndUpdate ({ sex: 'male' }, { sex: 'female' , name:'payal' })
//   .then((result) => {
//     console.log('Update result:', result);
//   })
//   .catch((error) => {
//     console.error('Error updating user:', error);
//   });

// delete document -:

// To delete documents, you can use methods like
//  deleteOne, deleteMany, findOneAndDelete, or findByIdAndDelete.

// secondone.deleteOne({sex:'male'})
// .then((data)=>{
// console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })
