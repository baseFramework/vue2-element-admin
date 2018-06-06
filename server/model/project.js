'use strict';
module.exports = (sequelize, DataTypes) => {
  var Project = sequelize.define('project', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,  //项目名称
    img:DataTypes.STRING, //项目图片
    desc:DataTypes.STRING, //项目描述
    pm:DataTypes.STRING, //产品经理
    tm:DataTypes.STRING, //技术经理
  });

  return Project;
};