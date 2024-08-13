const PictureEndpoint = require('../externals/picture.endpoint');

const pictureEnp = new PictureEndpoint();

class PictureService {
  constructor() {}

  async getByIdBreed(idBreed) {
    try {
      const responseFiltered = await pictureEnp.findByIdBreed(idBreed);
      return responseFiltered;
    } catch (error) {
      throw error;
    }
  }

}

module.exports = PictureService;
