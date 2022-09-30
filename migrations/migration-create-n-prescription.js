'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Prescription', {
      idPrescription: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idStaff: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Staff', key: 'idStaff' },
      },
      idPatient: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Patient', key: 'idPatient' },
      },
      date: {
        type: Sequelize.DATE
      },
      idMedicine: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Medicine', key: 'idMedicine' },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Prescription');
  }
};