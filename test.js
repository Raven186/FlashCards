"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Questions", [
      {
        question: "Какой фильм изображен на картинке ?",
        answer: "планета обезьян",
        img: "https://n1s1.hsmedia.ru/39/63/c9/3963c9634454cfffc4fda9572918ea5a/614x538_0xac120003_15107887811591270151.jpg",
        point: 100,
        theme_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Какой фильм изображен на картинке ?",
        answer: "2",
        img: "https://upload.wikimedia.org/wikipedia/ru/c/cd/%D0%A5%D0%B0%D0%B9%D0%B4%D0%B8_%28%D0%BE%D0%BF%D0%BE%D1%81%D1%81%D1%83%D0%BC%29.jpg",
        point: 200,
        theme_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Какой фильм изображен на картинке ?",
        answer: "3",
        img: "https://upload.wikimedia.org/wikipedia/ru/c/cd/%D0%A5%D0%B0%D0%B9%D0%B4%D0%B8_%28%D0%BE%D0%BF%D0%BE%D1%81%D1%81%D1%83%D0%BC%29.jpg",
        point: 300,
        theme_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Какой фильм изображен на картинке ?",
        answer: "4",
        img: "https://quiz.lifehacker.ru//uploads/attachment/image/2965/6M.jpg",
        point: 300,
        theme_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Какой фильм изображен на картинке ?",
        answer: "1+1",
        img: "https://onlinequiz.ru/wp-content/uploads/2020/04/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA-%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0-2020-04-25-%D0%B2-20.46.09.png",
        point: 300,
        theme_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Questions");
  },
};

//////////////////////-----------------------------------------------
("use strict");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Questions", [
      {
        question: "Чай родом из Китая ?",
        answer: "правда",
        img: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1.5/cdn/ff9bec21-b8dd-43f0-b4da-794f68040533/8b4dc142-3443-45fd-8145-b08cffe5d0ab.jpg",
        point: 100,
        theme_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Подводный хоккей - это реальный вид спорта ?",
        answer: "правда",
        img: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1.5/cdn/ff9bec21-b8dd-43f0-b4da-794f68040533/0a2a1cf7-caa6-4f21-8fb2-9d9e7a6ddaa3.jpg",
        point: 200,
        theme_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Акулы лишены слуха ?",
        answer: "ложь",
        img: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1.5/cdn/ff9bec21-b8dd-43f0-b4da-794f68040533/689f2341-d065-4e49-b2bc-e7517a60e9b9.jpg",
        point: 300,
        theme_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Сиксилиард равен миллиону миллионов ?",
        answer: "ложь",
        img: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1.5/cdn/ff9bec21-b8dd-43f0-b4da-794f68040533/65b6dce5-4e9d-4cf3-877e-c7cb81dfd4bb.jpg",
        point: 300,
        theme_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "В Windows нельзя создать папку с названием Con ?",
        answer: "правда",
        img: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1.5/cdn/9fc07353-9b07-4ca2-94fa-7c5bce06ac64/0f17d88d-3bab-4047-ae31-bdb421966d5a.jpg",
        point: 300,
        theme_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Questions");
  },
};
