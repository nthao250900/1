const JWT = require("jsonwebtoken");
const createError = require("http-errors");
const { accessTokenSecret, refreshTokenSecret } = require("../config/config");

module.exports = {
  signAccessToken: (userId) => {
    return new Promise((resolve, reject) => {
      const payload = {};
      const secret = accessTokenSecret;
      const options = {
        expiresIn: "1y",
        issuer: "pickurpage.com",
        audience: userId,
      };
      JWT.sign(payload, secret, options, (err, token) => {
        if (err) reject(err);

        resolve(token);
      });
    });
  },
  verifyAccessToken: (req, res, next) => {
    if (!req.headers["authorization"]) return next(createError.Unauthorized());
    const authHeader = req.headers["authorization"];
    const bearerToken = authHeader.split(" ");
    const token = bearerToken[1];
    JWT.verify(token, accessTokenSecret, (err, payload) => {
      if (err) {
        // if (err.name === "JsonWebTokenError") {
        //   return next(createError.Unauthorized());
        // } else {
        //   return next(createError.Unauthorized(err.message));
        // }
        const message =
          err.name === "JsonWebTokenError" ? "Unauthorized" : err.message;
        return res.send({
          error: {
            error: err.status,
            message: message,
          },
        });
      }
      req.payload = payload;
      next();
    });
  },
  signRefreshAccessToken: (userId) => {
    return new Promise((resolve, reject) => {
      const payload = {};
      const secret = refreshTokenSecret;
      const options = {
        expiresIn: "1y",
        issuer: "pickurpage.com",
        audience: userId,
      };
      JWT.sign(payload, secret, options, (err, token) => {
        if (err) reject(err);

        resolve(token);
      });
    });
  },
  verifyRefreshToken: (refreshToken) => {
    return new Promise((resolve, reject) => {
      JWT.verify(refreshToken, refreshTokenSecret, (err, payload) => {
        if (err) return reject(createError.Unauthorized());
        const userId = payload.aud;
        resolve(userId);
      });
    });
  },
};
