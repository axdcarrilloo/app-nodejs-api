const axios = require('axios');
const boom = require('@hapi/boom');

class CatEntpoint {
  constructor() {
    this.catAPI = 'https://api.thecatapi.com/v1';
  }

  async search(buildProperties) {
    try {
      const response = await axios.get(this.catAPI + '/breeds/search?' + buildProperties);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async findById(idCat) {
    try {
      const response = await axios.get(this.catAPI + '/breeds/' + idCat);
      const { id, name, temperament, origin } = response.data;
      const responseFiltered = { id, name, temperament, origin }
      return responseFiltered;
    } catch (error) {
      throw boom.notFound('Raza no encontrada');
    }
  }

  async findAll() {
    try {
      const response = await axios.get(this.catAPI + '/breeds');
      const responseFiltered = response.data.map(({ id, name, temperament, origin }) => ({ id, name, temperament, origin }));
      return responseFiltered;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CatEntpoint;
