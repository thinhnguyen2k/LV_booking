'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Booking', {
      idBooking: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idTime: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Examination_Hours', key: 'idTime' },
      },
      idStaff: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Staff', key: 'idStaff' },
      },
      idStatus: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Status', key: 'idStatus' },
      },
      idPatient: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Patient', key: 'idPatient' },
      },
      date: {
        type: Sequelize.DATE
      },
      idSpecialist: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Specialist', key: 'idSpecialist' },
      },
      idPayment: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Payment', key: 'idPayment' },
      },
      paymentStatus: {
        type: Sequelize.INTEGER
      },
      active: {
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Booking');
  }
};