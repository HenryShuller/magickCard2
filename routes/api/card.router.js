const router = require('express').Router();

const CardOne = require('../../components/CardOne');

const { Card } = require('../../db/models');
 

// изменение карточки 

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


// добавление карточки 

router.post('/', async (req,res) => {
  const {name, img, price, newold} = req.body
  const card = await Card.create({name, price, img, newold, userId:res.locals.user.id })
  const html = res.renderComponent(CardOne, {card}, {doctype: false})
  res.json({html, success: true})
})

module.exports = router;
