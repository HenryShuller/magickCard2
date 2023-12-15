require('dotenv').config();
const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { User } = require('../../db/models');
const generateTokens = require('../../utils/authUtils');
// const { access } = require('../../config/jwtConfig');

// создание юзера
router.post('/rega', async (req, res) => {
  const { name, password, email, city } = req.body;

  if (
    name.trim() === '' ||
    email.trim() === '' ||
    password.trim() === '' ||
    city.trim() === ''
  ) {
    res.status(400).json({ success: false, massege: 'Заполните все поля' });
    return;
  }
  try {
    const findUser = await User.findOne({ where: { email } });

    if (findUser)
      return res.status(400).json({
        success: false,
        message: 'Пользователь с таким Email уже зарегестрирован',
      });
    const hash = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      password: hash,
      email,
      city,
    });

    res.json({ success: true, message: 'Вы зарегестрированы!' });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// аутентификация существующего пользователя

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    if (email && password) {
      const userndb = await User.findOne({ where: { email } });

      if (!userndb) {
        return res
          .status(400)
          .json({ success: false, message: 'Пользователя нет' });
      }

      const check = await bcrypt.compare(password, userndb.password);
      

      if (!check) {
        return res
          .status(400)
          .json({ success: false, message: 'Не верный email или password' });
      }
      

      const { acessToken, refreshToken } = generateTokens({
        user: {
          id: userndb.id,
          name: userndb.name,
          email: userndb.email,
        },
      });

      // устанавливаем куки

      res.cookie('access', acessToken, {
        maxAge: 1000 * 60 * 5,
        httpOnly: true,
      });
      res.cookie('refresh', refreshToken, {
        maxAge: 1000 * 60 * 60 * 12,
        httpOnly: true,
      });

      // отправляем ответ
      return res.json({
        success: true,
        userndb,
        message: `Пользователь ${userndb.name} Зарегестрирован`,
      });
    } else {
      return res.json({
        success: false,
        message: `Заполните все поля`,
      });
    }
  } catch (error) {
    console.error(error, 'err');
    res.status(500).send(error.message);
  }
});

module.exports = router;
