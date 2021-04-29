'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UsersWorkingDay extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UsersWorkingDay.init({
    userId: DataTypes.INTEGER,
    workingDayId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UsersWorkingDay',
  });
  return UsersWorkingDay;
};