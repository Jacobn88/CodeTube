module.exports = function (sequelize, DataTypes) {  
  var Videos = sequelize.define("Videos", {
    url: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  //make association 
  Videos.associate = function (models) {
    Videos.belongsTo(models.User, {
    })
  }
  return Videos;
};