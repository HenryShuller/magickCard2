const router = require('express').Router();
const MainRouter = require('./view/main.router');
// импортируем роуты

// подключаем роуты api

// подключаем роуты view
router.use('/', MainRouter);

module.exports = router;
