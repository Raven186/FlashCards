'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Questions',
      [{
        question: '1?',
        answer: '1',
        img: 'https://upload.wikimedia.org/wikipedia/ru/c/cd/%D0%A5%D0%B0%D0%B9%D0%B4%D0%B8_%28%D0%BE%D0%BF%D0%BE%D1%81%D1%81%D1%83%D0%BC%29.jpg',
        point: 100,
        theme_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: '2?',
        answer: '2',
        img: 'https://upload.wikimedia.org/wikipedia/ru/c/cd/%D0%A5%D0%B0%D0%B9%D0%B4%D0%B8_%28%D0%BE%D0%BF%D0%BE%D1%81%D1%81%D1%83%D0%BC%29.jpg',
        point: 200,
        theme_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: '3?',
        answer: '3',
        img: 'https://upload.wikimedia.org/wikipedia/ru/c/cd/%D0%A5%D0%B0%D0%B9%D0%B4%D0%B8_%28%D0%BE%D0%BF%D0%BE%D1%81%D1%81%D1%83%D0%BC%29.jpg',
        point: 300,
        theme_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: '4?',
        answer: '4',
        img: 'https://upload.wikimedia.org/wikipedia/ru/c/cd/%D0%A5%D0%B0%D0%B9%D0%B4%D0%B8_%28%D0%BE%D0%BF%D0%BE%D1%81%D1%81%D1%83%D0%BC%29.jpg',
        point: 300,
        theme_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: '5?',
        answer: '5',
        img: 'https://upload.wikimedia.org/wikipedia/ru/c/cd/%D0%A5%D0%B0%D0%B9%D0%B4%D0%B8_%28%D0%BE%D0%BF%D0%BE%D1%81%D1%81%D1%83%D0%BC%29.jpg',
        point: 300,
        theme_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Questions')
  }
};
