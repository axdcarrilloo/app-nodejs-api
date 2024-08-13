
const UserDatabase = require('../database/user.database');
const boom = require('@hapi/boom');

const userDB = new UserDatabase();

class UserService {
  constructor() {}

  async getByUserNameAndPassword(login) {
    try {
      const result = await userDB.findByLogin(login);
      if(!result) {
        throw boom.notFound('Usuario no encontrado');
      } else {
        return result;
      }
    } catch (error) {
      throw error;
    }
  }

  async getAll() {
    try {
      const result = await userDB.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  async register(user) {
    try {
      const id = await userDB.create(user);
      return id;
    } catch (error) {
      throw error;
    }
  }

}

module.exports = UserService;
