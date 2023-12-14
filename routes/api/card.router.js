const router = require('express').Router();
const { Card } = require('../../db/models');

router.put('/:putId', async (req, res) => {
  const { putId } = req.params;
  const { name, img, price, newold } = req.body;
  try {
    if (
      name.trim() === '' ||
      img.trim() === '' ||
      price.trim() === '' ||
      newold.trim() === ''
    ) {
      res.json({ success: false, message: 'заполните все поля' });
    } else {
      const putCard = await Card.update(
        { name, img, price, newold },
        { where: { id: putId } }
      );
      res.json({ success: true, card: putCard });
    }
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
