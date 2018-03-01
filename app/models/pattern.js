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
    garment_type: {
    type:   DataTypes.ENUM,
    values: ['sweaters', 'hats', 'gloves_and_mittens', 'scarves', 'stuffed_animals', 'socks', 'other'],
    allowNull: false,
    set(val) {
      this.setDataValue('garment_type', val.replace(/_/g, ' '));
    }
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
    },
    written_instructions: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        Pattern.belongsTo(models.User, {foreignKey: 'pattern_author', targetKey: 'username'});
      }
    }
  });
  return Pattern;
};