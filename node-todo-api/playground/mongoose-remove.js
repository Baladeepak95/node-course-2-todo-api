const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove({_id:'5ad99c6464988a102485be0a'}).then((todo) => {

// });

Todo.findByIdandRemove('5ad99c6464988a102485be0a').then((todo) => {
console.log(todo);
});