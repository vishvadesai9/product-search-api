const { Sequelize, DataTypes, Model } = require('sequelize');
require('dotenv').config();

const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USERNAME;
const dbPass = process.env.DB_PASS;
const dbPort = process.env.DB_PORT;

const sequelize = new Sequelize(`postgresql://${dbName}:${dbPass}@${dbHost}:${dbPort}/${dbUser}`, {
});



class Products extends Model {}

Products.init({

  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  tags: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'Products',
  timestamps: false,
}, {
  indexes: [
      { fields: ['tags'] },
      { fields: ['category'] },
      { fields: ['type'] },
      { fields: ['price'] }
  ]
});

Products.sync()
  .then(() => {
    console.log('Products table created successfully.');
  })
  .catch((error) => {
    console.error('Error creating Products table:', error);
  });

module.exports = Products;