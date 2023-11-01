const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: { // integer value
      type: DataTypes.INTEGER,
      allowNull: false, // doesn't allow null values
      primaryKey: true, // set as primary key
      autoIncrement: true // uses auto increment
    },
    product_id: { // integer value
      type: DataTypes.INTEGER,
      references: { // references the product model's id
        model: 'product',
        key: 'id'
      }
    },
    tag_id: { // integer value
      type: DataTypes.INTEGER,
      references: { // references the tag model's id
        model: 'tag',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
