
const express = require('express');
const PictureService = require('../services/picture.service');

const router = express.Router();
const pictureSvc = new PictureService();

router.get('/imagesbybreed/:id', async(req, res) => {
  const { id } = req.params;
  res.json(await pictureSvc.getByIdBreed(id));
});

module.exports = router;
