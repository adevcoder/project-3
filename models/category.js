
module.exports = function(sequelize, DataTypes) {
  var Category = sequelize.define("Category", {
<<<<<<< HEAD
    name: DataTypes.STRING(120)
=======
    name: DataTypes.STRING(256)
>>>>>>> ed7f746bbacdf09de18e08404d3c482bbcc8b0aa
  });
  return Category;
};

