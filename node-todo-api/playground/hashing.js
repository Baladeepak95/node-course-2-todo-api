const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc';

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash);
//     });
// });

var hashedPassword = '$2a$10$I5Hu8SSlPpD.SePQVJ9cZeFcZ2/Avf3gt6Hn3107T1e3fsqy6R1/G';

bcrypt.compare('123', hashedPassword, (err, res) => {
    console.log(res);
});


// var data = {
//     id:10
// };
// var token= jwt.sign(data,'123abc');
// console.log(token);

// var Decoded = jwt.verify(token, '123abc');
// console.log('Decoded:',Decoded);
// var message = 'I am  0';
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
//     id: 4
// };
//  var token = {
//      data,
//      hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
//  }

// //  token.data.id = 5;
// //  token.hash = SHA256(JSON.stringify(token.data)).toString();

//  var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

//  if(resultHash === token.hash) {
//      console.log('Data was not changed');
//  } else {
//      console.log('Data was changed Dont Trust');
//  }