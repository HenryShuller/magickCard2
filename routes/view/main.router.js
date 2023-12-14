const router = require('express').Router();
const Main = require('../../components/Main');
const { Card } = require('../../db/models');

//вывод всех карточек на главной страничке Main
router.get('/', async (req, res) => {
  const cards = await Card.findAll();
  console.log(res.locals.user, 'lknlknlknlknlkn');
  const html = res.renderComponent(Main, { cards });
  res.send(html);
});

module.exports = router;
