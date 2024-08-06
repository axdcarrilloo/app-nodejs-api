
const express = require('express');
const PictureService = require('../services/picture.service');

const router = express.Router();
const pictureSvc = new PictureService();

router.get('/imagesbybreed/:id', async(req, res, next) => {
  const { id } = req.params;
  try {
    res.json(await pictureSvc.getByIdBreed(id));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
