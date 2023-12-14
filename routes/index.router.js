const router = require('express').Router();
const MainRouter = require('./view/main.router');
const CardRoter = require('./view/card.router');
const ApiCardRouter = require('./api/card.router')
// импортируем роуты

// подключаем роуты api
router.use('/api/card', ApiCardRouter);
// подключаем роуты view
router.use('/', MainRouter);
router.use('/card', CardRoter);

module.exports = router;
