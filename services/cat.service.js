
const lodash = require('lodash');
const boom = require('@hapi/boom');
const CatEntpoint = require('../externals/cat.endpoint');

const catEnp = new CatEntpoint();

class CatService {
  constructor(){ }

  async searchOptional(properties) {
    try {
      const response = await this.getAll();
      let responseFiltered = response.map(({ id, name, temperament, origin }) => ({ id, name, temperament, origin }));
      const { temperament, origin } = properties;
      let breedMain = [];
      responseFiltered.find(cat => {
        if(temperament === cat.temperament || origin === cat.origin) {
          breedMain.push(cat);
        }
      });
    return breedMain;
    } catch (error) {
      throw error;
    }
  }

  buildRequestQuerys(properties) {
    const { name, temperament, origin } = properties;
    let stringComplete = '';
    if(name) {
      stringComplete += 'name='+name;
    }
    if(temperament && stringComplete !== '') {
      stringComplete += '&temperament='+temperament;
    } else if(temperament) {
      stringComplete += 'temperament='+temperament;
    }
    if(origin && stringComplete !== '') {
      stringComplete += '&origin='+origin;
    } else if(origin) {
      stringComplete += 'origin='+origin;
    }
    return stringComplete;
  }

  async getSearch(properties) {
    try {
      const response = await catEnp.search(this.buildRequestQuerys(properties));
      let responseFiltered = response.data.map(({ id, name, temperament, origin }) => ({ id, name, temperament, origin }));
      if(lodash.isEmpty(responseFiltered)) {
        responseFiltered = await this.searchOptional(properties);
      }
      if(lodash.isEmpty(responseFiltered)) {
        throw boom.notFound('Raza no encontrada');
      }
      return responseFiltered;
    } catch (error) {
      throw error;
    }
  }

  async getById(idCat) {
    try {
      const responseFiltered = await catEnp.findById(idCat);
      return responseFiltered;
    } catch (error) {
      throw error;
    }
  }

  async getAll() {
    try {
      const responseFiltered = await catEnp.findAll();
      return responseFiltered;
    } catch (error) {
      throw error;
    }
  }

}

module.exports = CatService;
