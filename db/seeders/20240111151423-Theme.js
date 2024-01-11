'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Themes',
      [{
        name: 'Theme 1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Theme 2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Theme 3',
        createdAt: new Date(),
        updatedAt: new Date()
      }])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Themes')
  }
};
