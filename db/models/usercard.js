'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserCard extends Model {
    static associate({ User, Card }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Card, { foreignKey: 'cardId' });
    }
  }
  UserCard.init(
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      cardId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Cards',
          key: 'id',
        },
        onDelete: 'cascade',
      },
    },
    {
      sequelize,
      modelName: 'UserCard',
    }
  );
  return UserCard;
};
