const router = require('express').Router();
const Not = require('../../components/Not');
const NotFoundPage = require('../../components/Not');

router.get('*', (req, res) => {
  const html = res.renderComponent(Not);
  res.status(404).send(html);
});

module.exports = router;