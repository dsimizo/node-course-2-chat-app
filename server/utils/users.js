class Users {
  constructor() {
    this.users = [];
  }

  addUser(id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }

  removeUser(id) {
    var user = this.getUser(id);

    if(user) {
      this.users = this.users.filter((user) => user.id !== id);
    }

    return user;
  }

  getUser(id) {
    var user = this.users.filter((user) => {
      return user.id === id;
    });

    return user[0];
  }

  getUserList(room) {
    var users = this.users.filter((user) => user.room === room);
    var namesArray = users.map((user) => user.name);

    return namesArray;
  }
}


module.exports = {Users};


// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//
//   getUserDescription() {
//     return `${this.name} is ${this.age} year(s) old.`;
//   }
//
// }
//
// var me = new Person('Daniel', 34);
// var description = me.getUserDescription();
// console.log(description);
