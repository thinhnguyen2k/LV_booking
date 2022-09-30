'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Medicine', {
      idMedicine: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      classify: {
        type: Sequelize.STRING
      },
      nameMedicine: {
        type: Sequelize.STRING
      },
      priceMedicine: {
        type: Sequelize.INTEGER
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Medicine');
  }
};
