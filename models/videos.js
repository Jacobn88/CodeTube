const sequelize = require("sequelize");

module.exports = (sequelize,DataTypes) => {
  let Videos = sequelize.define("Videos", {
    title:{
      type: DataTypes.STRING,
      allowNull: false 
    },
    url:{
      type: DataTypes.STRING,
      allowNull: false
    }

  });
  Videos.associate = function(models) {
    models.Videos.belongsTo(models.user, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    })
  };
  Videos.sync();
  return Videos;
}