// let userModule = (function () {
//     let users = [];
//     let userId = 0;
//     return {
//       create: (username, password) => {
//         let user = { id: userId, username, password };
//         users.push(user);
//         userId++;
//         return user;
//       },
//       get: (username) => {
//         let targetUser;
//         users.forEach((user) => {
//           if (user.username === username) {
//             targetUser = user;
//           }
//         });
//         return targetUser;
//       }
//     };
//   })();
//   console.log(userModule.create('Julia', 'hello123'));
//   console.log(userModule.create('Julia', 'hello123'));
//   console.log(userModule.create('Julia', 'hello123'));
//   console.log(userModule.create('Paul', 'hello456'));

  var userModule = (function () {
    var userAddress = {};
    var users = [];
    var userId = 0;
   
    return {
      create: (username, password) => {
        if (!userAddress.hasOwnProperty(username)) {
          var user = { id: userId, username, password };
          userAddress[username] = users.length + '';
          users.push(user);
          userId++;
   
          return user;
        } else {
          return users[userAddress[username]];
        }
      },
      get: (username) => {
        return (userAddress[username]) ? users[userAddress[username]] : null;
      }
    };
  })();
   
  console.log(userModule.create('Julia', 'hello123'));
  console.log(userModule.create('Julia', 'hello123'));
  console.log(userModule.create('Julia', 'hello123'));
  console.log(userModule.create('Paul', 'hello456'));
   
  console.log(userModule.get('Julia'));
  console.log(userModule.get('Paul'));
  console.log(userModule.get('Mike'));