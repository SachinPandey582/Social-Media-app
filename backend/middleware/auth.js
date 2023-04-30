const User = require("../models/users");
const jwt = require("jsonwebtoken");

exports.isAuthenticated = async (req, res, next) => {
    console.log(req.user)
  try {
    const { token } = req.cookies;
    console.log(token)
    if (!token) {
      return res.status(401).json({
        message: "please Login First",
      });
    }
    const decoded = await jwt.verify(token, process.env.JWT_Secret);

    req.user = await User.findById(decoded._id);
    next();
  } catch (err) {
    res.send(err.message);
  }
};
