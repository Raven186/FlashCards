'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Themes',
      [{
        name: 'Кино',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Правда и ложь',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Лого',
        createdAt: new Date(),
        updatedAt: new Date()
      }])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Themes')
  }
};
