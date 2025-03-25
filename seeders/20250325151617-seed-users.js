'use strict'

const usersData = [{ username: 'Alex' }]

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', usersData)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null)
  }
}
