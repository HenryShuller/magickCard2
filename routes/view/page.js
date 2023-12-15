const router = require('express').Router();
const Page = require('../../components/Page');
const { Card } = require('../../db/models');




router.get('/:id' , async(req, res) => {
  const { id } = req.params;
  const cardi = await Card.findOne({ where: { id } });
  const html = res.renderComponent(Page, { cardi });
  res.send(html);
});
module.exports = router;
