"use strict";

'лого синема' = 'https://thumbs.dreamstime.com/b/tempo-di-film-del-guardiamarina-del-cinema-60575002.jpg'
'5 запутанных вопросов' - "Правда и ложь' - 'https://static.rustore.ru/apk/1334744767/content/ICON/e008615f-48f6-47cc-8089-0af1dbc98f00.png'
лого - https://play-lh.googleusercontent.com/fK2E0cceMaIzaUHox6kzWoRK0a5bSBM-EFa6adf6FDWoTILTR7nXNutVMRp4VaHi8PC8

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
        answer: "охотники за привидениями",
        img: "https://img.playbuzz.com/image/upload/ar_1.3333333333333333,c_crop/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1.5/v1537782424/krirc8ko0y8jahenvyrx.jpg",
        point: 200,
        theme_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Какой фильм изображен на картинке ?",
        answer: "эдвард руки-ножницы",
        img: "https://n1s1.hsmedia.ru/ce/1a/a7/ce1aa71e3fed4da8104821ef18b2ead9/346x303_0xac120003_18071039341591269959.jpg",
        point: 300,
        theme_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Какой фильм изображен на картинке ?",
        answer: "круэлла",
        img: "https://avatars.dzeninfra.ru/get-zen_doc/1658683/pub_6107b08375ac2b08435fdc5b_6107d0e975ac2b0843d2120c/scale_2400",
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
      {
        question: "Угадай лого?",
        answer: "рэдбул",
        img: "https://e7.pngegg.com/pngimages/782/211/png-clipart-redbull-logo-red-bull-logo-advanced-exercise-red-bull-mammal-carnivoran.png",
        point: 100,
        theme_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Угадай лого?",
        answer: "амазон",
        img: "https://static.wixstatic.com/media/d2252d_4c1a1bda6a774bd68f789c0770fd16e5~mv2.png",
        point: 200,
        theme_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Угадай лого?",
        answer: "принглес",
        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/af9f2648-395d-4dff-be05-b84b6f5923f7/d3hy501-b33d8ecf-e489-4b6d-b1b2-faf95ae6b3a4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FmOWYyNjQ4LTM5NWQtNGRmZi1iZTA1LWI4NGI2ZjU5MjNmN1wvZDNoeTUwMS1iMzNkOGVjZi1lNDg5LTRiNmQtYjFiMi1mYWY5NWFlNmIzYTQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.96BLWbzxh6EWv_o22ZvlpT_fT4VfORVS4GmWtqqEShw",
        point: 300,
        theme_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Угадай лого?",
        answer: "старбакс",
        img: "https://invest-brands.cdn-tinkoff.ru/US8552441094x640.png",
        point: 300,
        theme_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Угадай лого?",
        answer: "гуччи",
        img: "https://w7.pngwing.com/pngs/643/719/png-transparent-gucci-garden-t-shirt-logo-computer-icons-gucci-logo-emblem-trademark-line-thumbnail.png",
        point: 300,
        theme_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Угадай лого?",
        answer: "рэдбул",
        img: "https://e7.pngegg.com/pngimages/782/211/png-clipart-redbull-logo-red-bull-logo-advanced-exercise-red-bull-mammal-carnivoran.png",
        point: 100,
        theme_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Угадай лого?",
        answer: "амазон",
        img: "https://static.wixstatic.com/media/d2252d_4c1a1bda6a774bd68f789c0770fd16e5~mv2.png",
        point: 200,
        theme_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Угадай лого?",
        answer: "принглес",
        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/af9f2648-395d-4dff-be05-b84b6f5923f7/d3hy501-b33d8ecf-e489-4b6d-b1b2-faf95ae6b3a4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FmOWYyNjQ4LTM5NWQtNGRmZi1iZTA1LWI4NGI2ZjU5MjNmN1wvZDNoeTUwMS1iMzNkOGVjZi1lNDg5LTRiNmQtYjFiMi1mYWY5NWFlNmIzYTQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.96BLWbzxh6EWv_o22ZvlpT_fT4VfORVS4GmWtqqEShw",
        point: 300,
        theme_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Угадай лого?",
        answer: "старбакс",
        img: "https://invest-brands.cdn-tinkoff.ru/US8552441094x640.png",
        point: 300,
        theme_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Угадай лого?",
        answer: "гуччи",
        img: "https://w7.pngwing.com/pngs/643/719/png-transparent-gucci-garden-t-shirt-logo-computer-icons-gucci-logo-emblem-trademark-line-thumbnail.png",
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

////------------------------------------------------------------
/
  //логомания
  ("use strict");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Questions", [
      {
        question: "Угадай лого?",
        answer: "рэдбул",
        img: "https://e7.pngegg.com/pngimages/782/211/png-clipart-redbull-logo-red-bull-logo-advanced-exercise-red-bull-mammal-carnivoran.png",
        point: 100,
        theme_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Угадай лого?",
        answer: "амазон",
        img: "https://static.wixstatic.com/media/d2252d_4c1a1bda6a774bd68f789c0770fd16e5~mv2.png",
        point: 200,
        theme_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Угадай лого?",
        answer: "принглес",
        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/af9f2648-395d-4dff-be05-b84b6f5923f7/d3hy501-b33d8ecf-e489-4b6d-b1b2-faf95ae6b3a4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FmOWYyNjQ4LTM5NWQtNGRmZi1iZTA1LWI4NGI2ZjU5MjNmN1wvZDNoeTUwMS1iMzNkOGVjZi1lNDg5LTRiNmQtYjFiMi1mYWY5NWFlNmIzYTQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.96BLWbzxh6EWv_o22ZvlpT_fT4VfORVS4GmWtqqEShw",
        point: 300,
        theme_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Угадай лого?",
        answer: "старбакс",
        img: "https://invest-brands.cdn-tinkoff.ru/US8552441094x640.png",
        point: 300,
        theme_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Угадай лого?",
        answer: "гуччи",
        img: "https://w7.pngwing.com/pngs/643/719/png-transparent-gucci-garden-t-shirt-logo-computer-icons-gucci-logo-emblem-trademark-line-thumbnail.png",
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

