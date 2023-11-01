// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: { // integer value
      type: DataTypes.INTEGER,
      allowNull: false, // doesn't allow null values
      primaryKey: true, // set as primary key
      autoIncrement: true // uses auto increment
    },
    product_name: { // string value
      type: DataTypes.STRING,
      allowNull: false // doesn't allow null values
    },
    price: { // decimal value
      type: DataTypes.DECIMAL,
      allowNull: false, // doesn't allow null values
      validate: { // validates that the value is a decimal
        isDecimal: true
      }
    },
    stock: { // integer value
      type: DataTypes.INTEGER,
      allowNull: false, // doesn't allow null values
      defaultValue: 10, // set a default value of 10
      validate: { // validates that the value is numeric
        isNumeric: true
      }
    },
    category_id: { // integer value
      type: DataTypes.INTEGER,
      references: { // references the category model's id
        model: 'category',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
