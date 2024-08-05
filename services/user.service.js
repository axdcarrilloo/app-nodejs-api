
const User = require('../models/user.model');
const boom = require('@hapi/boom');

class UserService {
  constructor() {}

  async getByUserNameAndPassword(login) {
    const result = await User.find().then(users => {
      return users.find(user => {
        if(user.userName === login.userName && user.password === login.password) {
          return user;
        }
      });
    });
    if(!result) {
      throw boom.notFound('Usuario no encontrado');
    } else {
      return result;
    }
  }

  async getAll() {
    const result = User.find().then();
    return result;
  }

  async register(user) {
    const newUser = new User({
      numberCC: user.numberCC,
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      userName: user.userName,
      password: user.password
    });

    const id = newUser.save().then(user => {
      return user._id
    });
    return id;
  }

}

module.exports = UserService;
