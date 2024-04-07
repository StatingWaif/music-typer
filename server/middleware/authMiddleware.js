const jwt = require("jsonwebtoken");
const { Token } = require("../models/models");

module.exports = function (req, res, next) {
  if (req.method === "OPTIONS") {
    next();
  }

  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "no auth" });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    req.user = decoded;

    next();
  } catch (e) {
    console.log(e);
    res.status(401).json({ message: "no auth" });
  }
};
