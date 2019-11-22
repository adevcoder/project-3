
module.exports = function (sequelize, DataTypes) {
  var Category = sequelize.define("Category", {
    name: DataTypes.STRING(200),
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: now()
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'
    }
  });
  return Category;
};

