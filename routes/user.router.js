const express = require('express');
const UserService = require('../services/user.service');
const validatorHandler = require('../middlewares/validators.handlers');
const userSchema = require('../schemas/user.schema');

const router = express.Router();
const userSvc = new UserService();

router.get('/login',
  async(req, res, next) => {
    try {
      res.json(await userSvc.getByUserNameAndPassword(req.body));
    } catch (error) {
      next(error);
    }
  }
);

router.get('/getAll', async(req, res) => {
  res.json(await userSvc.getAll());
});

router.post('/register', validatorHandler(userSchema, 'body'),
  async(req, res, next) => {
    res.status(201).json(await userSvc.register(req.body));
  }
);

module.exports = router;
