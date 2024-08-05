const express = require('express');
const CatService = require('../services/cat.service');

const router = express.Router();
const catSvc = new CatService();

router.get('/breeds/search', async(req, res, next) => {
  try {
    const querys = req.query;
    res.json(await catSvc.getSearch(querys));
  } catch (error) {
    next(error);
  }
});

router.get('/breeds/:id',
  async(req, res, next) => {
    try {
      const { id } = req.params;
      res.json(await catSvc.getById(id));
    } catch (error) {
      next(error);
    }
  }
);

router.get('/breeds', async(req, res) => {
  res.json(await catSvc.getAll());
});

module.exports = router;
