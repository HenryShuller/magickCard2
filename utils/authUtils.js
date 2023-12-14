const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwtConfig');
require('dotenv').config()

const generateTokens = (payload) => ({
  accessToken: jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: jwtConfig.access.expiresIn,
  }),
  refreshToken: jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: jwtConfig.refresh.expiresIn,
  }),
});

module.exports = generateTokens;
