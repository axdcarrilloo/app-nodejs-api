
const User = require('../models/user.model');

class UserDatabase {
  constructor() {}

  async create(user) {
    const newUser = new User({
      numberCC: user.numberCC,
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      userName: user.userName,
      password: user.password
    });

    try {
      const id = newUser.save().then(user => {
        return user._id
      });
      return id;
    } catch (error) {
      throw error;
    }
  }

  async findByLogin(login) {
    const result = await User.find().then(users => {
      return users.find(user => {
        if(user.userName === login.userName && user.password === login.password) {
          return user;
        }
      });
    });
    return result;
  }

  async findAll() {
    const result = User.find().then();
    return result;
  }

}

module.exports = UserDatabase;
