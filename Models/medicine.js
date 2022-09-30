'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Medicine extends Model {
   
    static associate(models) {

  
    }
  }
  Medicine.init({
    idMedicine: DataTypes.INTEGER,
    classify: DataTypes.STRING,
    nameMedicine: DataTypes.STRING,
    priceMedicine: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Medicine',
  });


  return Medicine;
};

