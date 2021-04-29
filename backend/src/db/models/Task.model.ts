import {
  DataTypes, Model, Optional, Sequelize,
} from 'sequelize';

export interface TaskInterface {
  id: number;
  value: string;
  isDone: boolean;
}

export interface TaskCreationInterface extends Optional<TaskInterface, 'id'> {}

export class Task extends Model<TaskInterface, TaskCreationInterface> implements TaskInterface {
  public id!: number;

  public value!: string;

  public isDone!: boolean;
}

export const initTaskModel = (sequelize: Sequelize) => Task.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isDone: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    underscored: true,
  },
);
