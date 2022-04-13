const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define("genero", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: true,
      defaultValue: DataTypes.UUIDV4,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};
