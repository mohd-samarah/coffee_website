import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../db';

export default class Coffee extends Model {}
Coffee.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(128),
      defaultValue: 'No name',
    },
    price: {
      type: DataTypes.FLOAT(5),
      defaultValue: 0.0,
    },
    description: {
      type: DataTypes.STRING(128),
      defaultValue: 'No description',
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: 'No image URL',
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    }
  },
  { sequelize, modelName: 'Coffee' }
);
