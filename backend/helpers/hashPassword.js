const bcrypt = require("bcrypt");

const HashPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);
  return hashedPassword;
};
const IsValidPassword = (password, passwordSQL) => {
  console.log(
    "🚀 ~ file: hashPassword.js:9 ~ IsValidPassword ~ password, passwordSQL:",
    password,
    passwordSQL
  );
  return bcrypt.compareSync(password, passwordSQL);
};

module.exports = {
  hashedPassword: HashPassword,
  isValidPassword: IsValidPassword,
};
