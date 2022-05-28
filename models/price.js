'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Price extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Price.hasOne(models.product, {
        foreignKey: 'product_id'
      });
      // define association here
    }
  }
  Price.init({
    Price: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Price',
  });
  return Price;
};