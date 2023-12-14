const router = require('express').Router();
const MainRouter = require('./view/main.router');
const CardRoter = require('./view/card.router');
const ApiCardRouter = require('./api/card.router');
const ApiAuthRouter = require('./api/auth.router');
const ViewAuthRouter = require('./view/auth.router');
const Page = require('./view/page');
const notFoundRouter = require('./view/404.router');
// импортируем роуты

// подключаем роуты api
router.use('/api/card', ApiCardRouter);
router.use('/api/auth', ApiAuthRouter);

// подключаем роуты view
router.use('/', MainRouter);
router.use('/card', CardRoter);
router.use('/auth', ViewAuthRouter);
router.use('/Page', Page);
// 404 страница
router.use('*', notFoundRouter);

module.exports = router;
