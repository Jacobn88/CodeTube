// const sequelize = require("sequelize");

// module.exports = function (sequelize, DataTypes) {
//   var Videos = sequelize.define("Videos", {
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     url: {
//       type: DataTypes.STRING,
//       allowNull: false
//     }

//   });
//   Videos.associate = function (models) {
//     Videos.belongsTo(models.Videos, {
//       foreignKey: {
//         allowNull: false
//       }
//     })
//   };
//   Videos.sync();
//   return Videos;
// }

module.exports = function (sequelize, DataTypes) {  
  var Videos = sequelize.define("Videos", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
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