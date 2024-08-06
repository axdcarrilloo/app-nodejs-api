const axios = require('axios');
const lodash = require('lodash');
const boom = require('@hapi/boom');

class CatService {
  constructor(){
    this.catAPI = 'https://api.thecatapi.com/v1';
  }

  async searchOptional(properties) {
    const response = await axios.get(this.catAPI + '/breeds');
    const responseFiltered = response.data.map(({ id, name, temperament, origin }) => ({ id, name, temperament, origin }));
    const { temperament, origin } = properties;
    let breedMain = [];
    responseFiltered.find(cat => {
      if(temperament === cat.temperament || origin === cat.origin) {
        breedMain.push(cat);
      }
    });
    return breedMain;
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
    const response = await axios.get(this.catAPI + '/breeds/search?' + this.buildRequestQuerys(properties));
    let responseFiltered = response.data.map(({ id, name, temperament, origin }) => ({ id, name, temperament, origin }));
    if(lodash.isEmpty(responseFiltered)) {
      responseFiltered = await this.searchOptional(properties);
    }
    if(lodash.isEmpty(responseFiltered)) {
      throw boom.notFound('Gato no encontrado');
    }
    return responseFiltered;
  }

  async getById(idCat) {
    try {
      const response = await axios.get(this.catAPI + '/breeds/' + idCat);
      const { id, name, temperament, origin } = response.data;
      const responseFiltered = { id, name, temperament, origin }
      return responseFiltered;
    } catch (error) {
      console.log(error.message);
      throw boom.notFound('Gato no encontrado');
    }
  }

  async getAll() {
    try {
      const response = await axios.get(this.catAPI + '/breeds');
      const responseFiltered = response.data.map(({ id, name, temperament, origin }) => ({ id, name, temperament, origin }));
      return responseFiltered;
    } catch (error) {
      console.error(error.message);
    }
  }

}

module.exports = CatService;
