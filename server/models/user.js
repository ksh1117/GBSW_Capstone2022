const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      idx: {
        type: Sequelize.STRING(40),
        allowNull: true,
        unique: true,
      },
      name: {
        type: Sequelize.STRING(15),
        allowNull: true,
      },
      password: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      img : {
        type : Sequelize.STRING(100),
        allowNull : true,
      },
      birthday : {
        type : Sequelize.DATE,
        allowNull : true,
      },
      provider: {
        type : Sequelize.STRING(10),
        allowNull: true,
        defaultValue : 'local'
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'User',
      tableName: 'users',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
  static associate(db){
    db.User.hasMany(db.Post);
  }
};