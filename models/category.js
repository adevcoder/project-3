
module.exports = function(sequelize, DataTypes) {
  var Category = sequelize.define("category", {
    name: DataTypes.STRING(256)
  });
  return Category;
};

