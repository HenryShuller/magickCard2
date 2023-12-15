const router = require('express').Router();
const PutCardPage = require('../../components/PutCardPage');
const { Card } = require('../../db/models');




router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const card = await Card.findOne({ where: { id } });
  const html = res.renderComponent(PutCardPage, { card });
  res.send(html);
});



module.exports = router;
