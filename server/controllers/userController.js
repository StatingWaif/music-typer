const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, Token } = require("../models/models");
const { Op } = require("sequelize");

const generateJwt = (id, name, email, role) => {
  return jwt.sign({ id, name, email, role }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};

class UserController {
  async registration(req, res, next) {
    const { name, email, password, role } = req.body;
    if (!email || !password || !name) {
      return next(ApiError.badRequest("Not all data"));
    }
    const candidate = await User.findOne({
      where: { [Op.or]: [{ email }, { name }] },
    });
    if (candidate) {
      return next(ApiError.badRequest("User already exists"));
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({
      name,
      email,
      role,
      password: hashPassword,
    });
    const token = generateJwt(user.id, user.name, user.email, user.role);

    await Token.create({ access: token, userId: user.id });

    return res.json({ token });
  }

  async login(req, res, next) {
    const { name, password } = req.body;
    if (!password || !name) {
      return next(ApiError.badRequest("Not all data"));
    }
    const user = await User.findOne({ where: { name } });
    if (!user) {
      return next(ApiError.badRequest("No such username"));
    }

    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(ApiError.badRequest("Bad password"));
    }
    const token = generateJwt(user.id, user.name, user.email, user.role);
    const newToken = await Token.findOne({ where: { userId: user.id } });
    await newToken.update({ access: token });
    return res.json({ token });
  }
  async check(req, res, next) {
    const token = generateJwt(
      req.user.id,
      req.user.name,
      req.user.email,
      req.user.role
    );
    return res.json({ token });
  }
}

module.exports = new UserController();
