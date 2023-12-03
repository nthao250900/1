var sql = require("mssql");

var config = {
  user: "nvduy220200",
  password: "Nguyenvuduy220200",
  server: "NGUYENTHANHHAO",
  database: "DACS_2",
  // driver: "msnodesqlv8",
  options: {
    trustedConnection: true,
    trustServerCertificate: true,
    instanceName: "",
    encrypt: true,
  },
  port: 49693,
};
var conn = new sql.connect(config, function (err) {
  if (err) console.log("Error Connected SQL Server: ", err);
  var request = new sql.Request();
  return request;
});

module.exports = {
  conn: conn,
  sql: sql,
};
