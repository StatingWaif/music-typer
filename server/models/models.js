const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
  avatar: { type: DataTypes.STRING },
});

const UserInfo = sequelize.define("user_info", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  avarageSpeed: { type: DataTypes.INTEGER, defaultValue: 0 },
  mistakePercent: { type: DataTypes.FLOAT, defaultValue: 0 },
  completedTexts: { type: DataTypes.INTEGER, defaultValue: 0 },
});

const Statistics = sequelize.define("statistics", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, defaultValue: 0 },
  indexOfCurrentWord: { type: DataTypes.INTEGER, defaultValue: 0 },
  indexOfCurrentLine: { type: DataTypes.INTEGER, defaultValue: 0 },
  mistakes: { type: DataTypes.INTEGER, defaultValue: 0 },
  seconds: { type: DataTypes.INTEGER, defaultValue: 0 },
  lines: { type: DataTypes.INTEGER, defaultValue: 0 },
  completed: { type: DataTypes.BOOLEAN, defaultValue: false },
  isPoem: { type: DataTypes.BOOLEAN, defaultValue: false },
});

const Text = sequelize.define("text", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  gameId: { type: DataTypes.STRING },
  name: { type: DataTypes.STRING },
  img: { type: DataTypes.STRING },
  lines: { type: DataTypes.INTEGER },
  languages: { type: DataTypes.STRING },
  timesPlayed: { type: DataTypes.INTEGER, defaultValue: 0 },
  isPoem: { type: DataTypes.BOOLEAN, defaultValue: false },
});
const Token = sequelize.define("token", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  access: { type: DataTypes.STRING },
  refresh: { type: DataTypes.STRING },
});

User.hasOne(UserInfo);
UserInfo.belongsTo(User);

User.hasMany(Statistics);
Statistics.belongsTo(User);

Text.hasMany(Statistics);
Statistics.belongsTo(Text);

User.hasOne(Token);
Token.belongsTo(User);

module.exports = {
  User,
  UserInfo,
  Statistics,
  Text,
  Token,
};
