const dbPool = require("../config/db_keeb_test");

const getAllJurusan = () => {
  const sqlQuery = "select * from jurusans order by id asc";

  return dbPool.execute(sqlQuery);
};

const getSpecificJurusan = (idJurusan) => {
  const sqlQuery = `select * from jurusans where id =${idJurusan}`;

  return dbPool.execute(sqlQuery);
};

const createNewJurusan = (body) => {
  var dataName = [];
  var dataValue = [];

  for (const [key, value] of Object.entries(body)) {
    if (key === "nama") {
      dataName.push(key);
      dataValue.push(value);
    }
  }
  const stringDataValue = dataValue.map((str) => `"${str}"`);

  const sqlQuery = `INSERT INTO jurusans (${dataName}) VALUES (${stringDataValue})`;
  return dbPool.execute(sqlQuery);
};

const updateJurusan = (body, idJurusan) => {
  const values = {};
  for (const [key, value] of Object.entries(body)) {
    if (key === "nama") {
      values[key] = value;
    }
  }

  let sqlQuery = "UPDATE jurusans SET ";
  for (const [name, value] of Object.entries(values)) {
    sqlQuery += `${name} = '${value}', `;
  }
  sqlQuery = sqlQuery.slice(0, -2); // Remove the trailing comma and space
  sqlQuery += `WHERE id = ${idJurusan}`; // Assuming you have a record_id variable

  return dbPool.execute(sqlQuery);
};

const deleteJurusan = (idJurusan) => {
  const sqlQuery = `delete from jurusans where id=${idJurusan}`;

  return dbPool.execute(sqlQuery);
};

module.exports = {
  getAllJurusan,
  getSpecificJurusan,
  createNewJurusan,
  updateJurusan,
  deleteJurusan,
};
