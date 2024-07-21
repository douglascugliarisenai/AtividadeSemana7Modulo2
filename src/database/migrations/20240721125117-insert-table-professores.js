'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('professores', [
      {
        nome: 'Joaquim',
        email: 'yO7uQ@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Marcos',
        email: 'yO7uQ@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Fernando',
        email: 'yO7uQ@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('professores', null, {})
  }
};
