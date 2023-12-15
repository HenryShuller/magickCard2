const router = require('express').Router();

const Page = require('../../components/Page');
const { Card } = require('../../db/models');

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const card = await Card.findOne({ where: { id } });
  const html = res.renderComponent(Page, { card });
  res.send(html);
});
module.exports = router;
