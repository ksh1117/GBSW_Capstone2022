module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    'board',
    {
      boardId: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      content : {
        type: DataTypes.STRING(500),
        allowNull: false
      }
    },
    {
      timestamps: true,
      paranoid: true,
    },
  );