const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Statistics, Text } = require("../models/models");
const { Op } = require("sequelize");

class StatisticsController {
  async add(req, res, next) {
    // const { mistakes, name, seconds, words, completed, gameId, img, lines } =
    //   req.body;
    const {
      gameId,
      name,
      img,
      indexOfCurrentLine,
      indexOfCurrentWord,
      mistakes,
      seconds,
      lines,
      completed,
      isPoem,
    } = req.body;
    const user = req.user;
    if (!gameId) {
      return next(ApiError.badRequest("Not all data"));
    }
    //НАДО проверку на реальность законченной игры которая вносится в бд
    let text = await Text.findOne({ where: { gameId } });
    if (!text) {
      text = await Text.create({
        name,
        gameId,
        img,
        lines,
      });
    }
    await Statistics.create({
      name,
      indexOfCurrentLine,
      indexOfCurrentWord,
      mistakes,
      seconds,
      lines,
      completed,
      isPoem,
      userId: user.id,
      textId: text.id,
    });
    await text.update({ timesPlayed: text.timesPlayed + 1 });
    return res.json({ true: true });
  }

  async getAll(req, res, next) {
    const user = req.user;
    const data = await Statistics.findAll({
      where: { userId: user.id },
      include: [
        {
          model: Text,
        },
      ],
      order: [["createdAt", "DESC"]],
    });
    return res.json(data);
  }
}

module.exports = new StatisticsController();
