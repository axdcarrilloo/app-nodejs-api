const express = require('express');
const UserService = require('../services/user.service');
const validatorHandler = require('../middlewares/validators.handlers');
const userSchema = require('../schemas/user.schema');

const router = express.Router();
const userSvc = new UserService();

router.post('/login',
  async(req, res, next) => {
    try {
      res.json(await userSvc.getByUserNameAndPassword(req.body));
    } catch (error) {
      next(error);
    }
  }
);

router.get('/getAll', async(req, res, next) => {
  try {
    res.json(await userSvc.getAll());
  } catch (error) {
    next(error);
  }
});

router.post('/register', validatorHandler(userSchema, 'body'),
  async(req, res, next) => {
    try {
      res.status(201).json(await userSvc.register(req.body));
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
