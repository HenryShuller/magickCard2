const router = require('express').Router();
const Main = require('../../components/Main');
const { Card } = require('../../db/models');

//вывод всех карточек на главной страничке Main
router.get('/', async (req, res) => {
add
  const cards = await Card.findAll();


  const { name1 } = req.query;
  let cards;
  if (!name1) {
    cards = await Card.findAll();
  } else {
    cards = await Card.findAll({ where: { name: name1 } });
  }
dev
  const html = res.renderComponent(Main, { cards });
  res.send(html);
});

module.exports = router;
