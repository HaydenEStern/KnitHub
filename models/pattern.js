module.exports = function(sequelize, DataTypes) {
  var Pattern = sequelize.define("Pattern", {
    pattern_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    chart_url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cables: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    cables: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    lace: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    colorwork: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        Pattern.hasOne(models.Author);
      }
    }
  });
  return Pattern;
};