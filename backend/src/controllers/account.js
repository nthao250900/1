const { conn } = require("../../config/dbConnect");
const {
  hashedPassword,
  isValidPassword,
} = require("../../helpers/hashPassword");
const {
  authSchema,
  loginValidate,
} = require("../../helpers/validation_schema");
const createError = require("http-errors");
const {
  signAccessToken,
  signRefreshAccessToken,
  verifyRefreshToken,
} = require("../../helpers/jwt_helper");

const RegisterController = async (req, res, next) => {
  try {
    const { username, password, role, fullName, email } =
      await authSchema.validateAsync(req.body);
    const hashPassword = hashedPassword(password);
    var pool = await conn;
    await pool.query(
      `SELECT
          COUNT(account.username) AS username,
          COUNT(informationUser.email) AS email
            FROM account
            INNER JOIN informationUser ON informationUser.email = N'${email}' OR account.username = N'${username}'`,
      async function (
        err,
        { recordset: [{ username: checkUsername, email: checkEmail }] }
      ) {
        if (err) throw createError.BadRequest();
        if (checkUsername !== 0 || checkEmail !== 0)
          return res.send({
            error: {
              status: 404,
              message: `E-mail: ${email} or Username: ${username} is already been registered.`,
            },
          });
        if (email && username && role && hashPassword)
          await pool.query(
            `
              INSERT INTO informationUser(fullName, email)
              VALUES (
                N'${fullName}',
                N'${email}'
              )
              INSERT INTO account (idUser, username, password, role)
              VALUES (
                (SELECT id FROM dbo.informationUser WHERE email = N'${email}'),
                N'${username}',
                N'${hashPassword}',
                N'${role}'
              )
              SELECT
                account.id,
                account.username,
                account.idUser,
                account.role,
                informationUser.fullName,
                informationUser.email,
                informationUser.address,
                informationUser.brithDay,
                informationUser.sex,
                informationUser.phone,
                informationUser.cccd,
                informationUser.payment
              FROM account INNER JOIN informationUser ON account.idUser = informationUser.id AND informationUser.email = N'${email}' AND account.username = N'${username}' ;
            `,
            async function (err, { recordset }) {
              if (err) throw next(createError.BadRequest());
              const accessToken = await signAccessToken(
                recordset?.[0]?.id?.toString()
              );
              const refreshToken = await signRefreshAccessToken(
                recordset?.[0]?.id?.toString()
              );
              res.send({ accessToken, refreshToken, userData: recordset?.[0] });
            }
          );
      }
    );
  } catch (error) {
    if (error.isJoi) error.status = 422;
    res.send({
      error: {
        status: error.status,
        message: error.message,
      },
    });
  }
};

const LoginController = async (req, res, next) => {
  try {
    const { username, password } = await loginValidate.validateAsync(req.body);

    var pool = await conn;
    await pool.query(
      `SELECT
      account.id,
      account.username,
      account.password,
      account.idUser,
      account.role,
      informationUser.fullName,
      informationUser.email,
      informationUser.avatar,
      informationUser.address,
      informationUser.brithDay,
      informationUser.sex,
      informationUser.phone,
      informationUser.cccd,
      informationUser.payment
    FROM account INNER JOIN informationUser ON account.username = N'${username}'`,
      async function (err, { recordset }) {
        if (err) throw createError.BadRequest();
        if (recordset.length === 0)
          return res.send({
            error: {
              status: 409,
              message: `User not registered.`,
            },
          });
        const checkPassword = isValidPassword(
          password,
          recordset?.[0]?.password
        );

        if (!checkPassword)
          return next(createError.Unauthorized("Password not valid"));
        const accessToken = await signAccessToken(
          recordset?.[0]?.id.toString()
        );
        const refreshToken = await signRefreshAccessToken(
          recordset?.[0]?.id.toString()
        );

        res.send({ accessToken, refreshToken, userData: recordset?.[0] });
      }
    );
  } catch (error) {
    if (error.isJoi)
      return next(createError.BadRequest("Invalid Username/Password"));
    next(error);
  }
};

const Authorization = async (req, res, next) => {
  res.send({
    status: 200,
    message: "success",
  });
};
const RefreshTokenController = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) throw next(createError.BadRequest());
    const userId = await verifyRefreshToken(refreshToken);
    const accessToken = await signAccessToken(userId);
    const _refreshToken = await signRefreshAccessToken(userId);
    res.send({ accessToken, refreshToken: _refreshToken });
  } catch (error) {
    next(error);
  }
};
const LogoutController = async (req, res, next) => {};

const SelectAccount = async (req, res, next) => {
  try {
    var pool = await conn;
    await pool.query(
      `SELECT
        account.id,
        account.username,
        account.password,
        account.idUser,
        account.role,
        informationUser.fullName,
        informationUser.email,
        informationUser.avatar,
        informationUser.address,
        informationUser.brithDay as birthDay,
        informationUser.sex,
        informationUser.phone,
        informationUser.cccd,
        informationUser.payment
      FROM account INNER JOIN informationUser ON account.role != N'admin'`,
      function (err, { recordset }) {
        if (err) throw createError.BadRequest();
        if (recordset.length === 0)
          return res.send({
            error: {
              status: 409,
              message: `Data load failed`,
            },
          });
        res.send(recordset);
      }
    );
  } catch (error) {
    next(error);
  }
};

module.exports = {
  RegisterController,
  LoginController,
  RefreshTokenController,
  LogoutController,
  Authorization,
  SelectAccount,
};
