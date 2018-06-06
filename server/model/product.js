'use strict';
module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('product', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    projectid: DataTypes.INTEGER, //项目ID
    name: DataTypes.STRING,  //产品名称
    img:DataTypes.STRING, //产品图片
    desc:DataTypes.STRING, //产品描述
    address:DataTypes.STRING, //产品访问地址
  });
  return Product;
};