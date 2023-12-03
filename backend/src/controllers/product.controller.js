const { conn } = require("../../config/dbConnect");
const createError = require("http-errors");
const InsertProduct = async (req, res, next) => {
  try {
    const {
      idProduct,
      nameProduct,
      slug,
      price,
      price_old,
      trademark,
      size,
      tags,
      colors,
      description,
      images,
    } = req.body;
    var pool = await conn;
    await pool.query(
      `SELECT COUNT(product.idProduct) AS idProduct
      FROM dbo.product WHERE product.idProduct = N'${idProduct}'
      `,
      async function (err, { recordset: [{ idProduct: checkIdProduct }] }) {
        if (err) throw next(createError.BadRequest());
        if (checkIdProduct !== 0)
          return res.send({
            error: {
              status: 404,
              message: `Product code: "${idProduct}" already exists.`,
            },
          });
        await pool.query(
          `
              INSERT INTO product(
                idProduct,
                nameProduct,
                images,
                price,
                price_old,
                colors,
                trademark,
                size,
                tags,
                description
              )
              VALUES (
                N'${idProduct}',
                N'${nameProduct}',
                N'${images}',
                N'${price}',
                N'${price_old}',
                N'${colors}',
                N'${trademark}',
                N'${size}',
                N'${tags}',
                N'${description}'
              )
              SELECT * FROM product WHERE idProduct = N'${idProduct}'
            `,
          async function (error, { recordset }) {
            if (error) throw next(createError.BadRequest());
            res.send({
              status: 200,
              data: recordset,
            });
          }
        );
      }
    );
  } catch (error) {
    res.send({
      error: {
        status: error.status,
        message: error.message,
      },
    });
  }
};

const SelectProduct = async (req, res, next) => {
  try {
    var pool = await conn;
    await pool.query(
      `SELECT 
        id AS 'key',
        idProduct,
        nameProduct,
        images,
        price,
        price_old,
        colors,
        trademark,
        size,
        tags,
        description
      FROM product`,
      function (err, { recordset }) {
        if (err) throw createError.BadRequest();
        if (recordset.length === 0)
          return res.send({
            error: {
              status: 409,
              message: `Data load failed`,
            },
          });
        res.send({
          status: 200,
          data: recordset,
        });
      }
    );
  } catch (error) {
    next(error);
  }
};
const SelectProductWithTop = async (req, res, next) => {
  try {
    const { top } = req.body;

    var pool = await conn;
    await pool.query(
      `SELECT ${top === "all" ? "" : `TOP(${top})`}
        id AS 'key',
        idProduct,
        slug,
        nameProduct,
        images,
        price,
        price_old,
        colors,
        trademark,
        size,
        tags,
        description
      FROM product`,
      function (err, { recordset }) {
        if (err) throw createError.BadRequest();
        if (recordset.length === 0)
          return res.send({
            error: {
              status: 409,
              message: `Data load failed`,
            },
          });

        res.send({
          status: 200,
          data: recordset,
        });
      }
    );
  } catch (error) {
    next(error);
  }
};
const SelectRandomProduct = async (req, res, next) => {
  try {
    const { number } = req.body;

    var pool = await conn;
    await pool.query(
      `SELECT TOP(${number})
      id AS 'key',
      idProduct,
      nameProduct,
      slug,
      images,
      price,
      price_old,
      colors,
      trademark,
      size,
      tags,
      description
    FROM product ORDER BY NEWID()`,
      function (err, { recordset }) {
        if (err) throw createError.BadRequest();
        if (recordset.length === 0)
          return res.send({
            error: {
              status: 409,
              message: `Data load failed`,
            },
          });

        res.send({
          status: 200,
          data: recordset,
        });
      }
    );
  } catch (error) {
    next(error);
  }
};
const SearchKeywordProduct = async (req, res, next) => {
  try {
    const { keyword } = req.body;

    var pool = await conn;
    await pool.query(
      `SELECT
      id AS 'key',
      idProduct,
      nameProduct,
      slug,
      images,
      price,
      price_old,
      colors,
      trademark,
      size,
      tags,
      description
    FROM product WHERE slug LIKE '%${keyword
      .toLowerCase().normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D")
      .trim()
      .split(" ")
      .join("-")}%' OR tags LIKE '%${keyword}%' `,
      function (err, { recordset }) {
        if (err) throw createError.BadRequest();
        if (recordset.length === 0)
          return res.send({
            error: {
              status: 409,
              message: `Data load failed`,
            },
          });

        res.send({
          status: 200,
          data: recordset,
        });
      }
    );
  } catch (error) {
    next(error);
  }
};
module.exports = {
  InsertProduct,
  SelectProduct,
  SelectProductWithTop,
  SelectRandomProduct,
  SearchKeywordProduct,
};
