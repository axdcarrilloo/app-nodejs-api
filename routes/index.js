const catRouter = require('./cat.router');
const pictureRouter = require('./picture.router');
const userRouter = require('./user.router');

function router(app) {
  app.use('/cats', catRouter);
  app.use('/pictures', pictureRouter);
  app.use('/users', userRouter);
}

module.exports = router;
