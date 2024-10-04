// src/models/Beer.ts

import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../sequelize';

interface Rating {
  average: number;
  reviews: number;
}

export class Beer extends Model {
  public id!: number;
  public price!: string;
  public name!: string;
  public rating!: Rating;
  public image!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Beer.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'beers',
    sequelize, 
  }
);
