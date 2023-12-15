'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Cards',
      [
        {
          name: 'Carmander',
          img: 'https://limitlesstcg.nyc3.digitaloceanspaces.com/tpci/BCR/BCR_018_R_EN.png',
          price: '10$',
          newold: 'Прямо с завода',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Raychu',
          img: 'https://archives.bulbagarden.net/media/upload/3/3b/RaichuXY43.jpg',
          price: '99$',
          newold: 'Слегка поношеная',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Shinx',
          img: 'http://s.ecrater.com/stores/341431/5cb6ab726e404_341431b.jpg',
          price: '5$',
          newold: 'new',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Electrode',
          img: 'https://cdn.mavin.io/production/soldItems/29404053/images/image-0.jpg',
          price: '8$',
          newold: 'new',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Luxray',
          img: 'http://i1.wp.com/pkmncards.com/wp-content/uploads/en_US-XY2-034-luxray.jpg',
          price: '89$',
          newold: 'new',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Pikachu',
          img: 'https://i.pinimg.com/originals/5e/99/66/5e996643b610e7aadebb68eaaf7b214d.png',
          price: '200$',
          newold: 'new',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Jolteon',
          img: 'https://i.pinimg.com/736x/9d/5e/8b/9d5e8b1cfa879af6b399ad36b451e48c.jpg',
          price: '29$',
          newold: 'new',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: 'ポケモン',
          img: 'https://archives.bulbagarden.net/media/upload/c/c2/FennekinXY24.jpg',
          price: '300$',
          newold: 'new',
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'レア',
          img: 'https://archives.bulbagarden.net/media/upload/1/17/EspeonEXRageBrokenHeavens35.jpg',
          price: '1999$',
          newold: 'new',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Юра',
          img: 'https://ca.slack-edge.com/T04V5DDHUN8-U05UJ2S6GGL-ec08468b61a3-512',
          price: 'беслпатно',
          newold: 'old',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cards', null, {});
  },
};
