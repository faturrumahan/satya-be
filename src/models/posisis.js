const dbPool = require("../config/db_keeb_test");

const getAllPosisi = () => {
  const sqlQuery = "select * from posisis order by id asc";

  return dbPool.execute(sqlQuery);
};

const getSpecificPosisi = (idPosisi) => {
  const sqlQuery = `select * from posisis where id =${idPosisi}`;

  return dbPool.execute(sqlQuery);
};

const createNewPosisi = (body) => {
  var dataName = [];
  var dataValue = [];

  for (const [key, value] of Object.entries(body)) {
    dataName.push(key);
    dataValue.push(value);
  }
  const stringDataValue = dataValue.map((str) => `"${str}"`);

  const sqlQuery = `INSERT INTO posisis (${dataName}) VALUES (${stringDataValue})`;
  return dbPool.execute(sqlQuery);
};

const updatePosisi = (body, idPosisi) => {
  const values = {};
  for (const [key, value] of Object.entries(body)) {
    values[key] = value;
  }

  let sqlQuery = "UPDATE posisis SET ";
  for (const [name, value] of Object.entries(values)) {
    sqlQuery += `${name} = '${value}', `;
  }
  sqlQuery = sqlQuery.slice(0, -2); // Remove the trailing comma and space
  sqlQuery += `WHERE id = ${idPosisi}`; // Assuming you have a record_id variable

  return dbPool.execute(sqlQuery);
};

const deletePosisi = (idPosisi) => {
  const sqlQuery = `delete from posisis where id=${idPosisi}`;

  return dbPool.execute(sqlQuery);
};

module.exports = {
  getAllPosisi,
  getSpecificPosisi,
  createNewPosisi,
  updatePosisi,
  deletePosisi,
};
