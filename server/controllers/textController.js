const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Statistics, Text } = require("../models/models");
const { Op } = require("sequelize");

class TextController {
  async getPopular(req, res, next) {
    const data = await Text.findAll({
      where: {
        timesPlayed: { [Op.gt]: 0 },
      },
      order: [["timesPlayed", "DESC"]],
      limit: 10,
    });
    return res.json(data);
  }
}

module.exports = new TextController();
