'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

     await queryInterface.bulkInsert('cursos', [
      {
        nome: 'Java',
        duracao: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'C#',
        duracao: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Python',
        duracao: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Javascript',
        duracao: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.bulkDelete('cursos', null, {
      truncate: true
    })
  }
};
