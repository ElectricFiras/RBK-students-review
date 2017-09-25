var People = require('./index')

var  checkUser = function (username,password,cb){
      People.find({name : username , password : password}, function (err, docs) {
        if (docs){
          cb(docs[0])
        }else{
          console.log('Wrong!!!')        }
    });	
}

// var  checkPass = function (password,cb){
//       People.find({password : password}, function (err, docs) {
//         if (docs.length){
//             cb('Name exists already',null);
//         }else{
//             user.save(function(err){
//                 cb(err,user);
//             });
//         }
//     });	
// }
exports.checkUser = checkUser;
// exports.checkPass = checkPass;