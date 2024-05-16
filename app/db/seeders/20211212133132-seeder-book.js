"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Books",
      [
        {
          title: "Fullstack Javascript Developer",
          author: "Kristian Yodi",
          image: "/uploads/image 1.png",
          published: new Date(),
          price: 90,
          stock: 100,
          user: 1,
          category: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: '"Laravel API"',
          author: "Hilal",
          image: "/uploads/image 2.png",
          published: new Date(),
          price: 90,
          stock: 100,
          user: 1,
          category: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Run Time NodeJs",
          author: "Rido",
          image: "/uploads/image 3.png",
          published: new Date(),
          price: 90,
          stock: 100,
          user: 1,
          category: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Algorithm",
          author: "Kristian Yodi",
          image: "/uploads/image 4.png",
          published: new Date(),
          price: 90,
          stock: 100,
          user: 1,
          category: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Fullstack Mobile (Flutter)",
          author: "Kristian Yodi",
          image: "/uploads/image 5.png",
          published: new Date(),
          price: 90,
          stock: 100,
          user: 1,
          category: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Dart Programming",
          author: "Kristian Yodi",
          image: "/uploads/image 6.png",
          published: new Date(),
          price: 90,
          stock: 100,
          user: 1,
          category: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Books", null, {});
  },
};
