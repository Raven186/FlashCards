'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    static associate({ User, Question }) {
      this.belongsTo(User, { foreignKey: 'user_id' })
      this.belongsTo(Question, { foreignKey: 'question_id' })
    }
  }
  Answer.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    question_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Questions',
        key: 'id'
      }
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Answer',
  });
  return Answer;
};