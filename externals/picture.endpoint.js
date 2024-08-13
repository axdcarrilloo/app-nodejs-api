const axios = require('axios');

class PictureEndpoint {
  constructor() {
    this.catAPI = 'https://api.thecatapi.com/v1';
    this.key = '&api_key=live_JBT0Ah0Nt12iyl2IpjQVLDWjcLk0GQwf4zI9wBMfmfejKmcC31mOJp4yJz5TsOUP';
  }

  async findByIdBreed(idBreed) {
    try {
      const response = await axios.get(this.catAPI + '/images/search?limit=10&breed_ids=' + idBreed + this.key);
      const responseFiltered = response.data.map(({ id, url, width, height }) => ({ id, url, width, height }));
      return responseFiltered;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = PictureEndpoint;
