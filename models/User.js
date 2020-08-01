module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define(
    'User',
    {
      id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      id_project: { type: DataTypes.INTEGER, allowNull: false },
      first_name: { type: DataTypes.STRING(50), allowNull: false },
      last_name: { type: DataTypes.STRING(50), allowNull: false },
      email: { type: DataTypes.STRING(50), allowNull: false },
      username: { type: DataTypes.STRING(50), allowNull: false },
      password: { type: DataTypes.STRING(100), allowNull: false },
      enabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    { freezeTableName: true },
  );
  return User;
};
