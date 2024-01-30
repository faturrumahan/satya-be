const dbPool = require("../config/db_keeb_test");

const getAllKriteria = () => {
  const sqlQuery = "select * from kriterias order by id asc";

  return dbPool.execute(sqlQuery);
};

const getSpecificKriteria = (idKriteria) => {
  const sqlQuery = `select * from kriterias where id =${idKriteria}`;

  return dbPool.execute(sqlQuery);
};

const createNewKriteria = (body) => {
  var dataName = [];
  var dataValue = [];

  for (const [key, value] of Object.entries(body)) {
    dataName.push(key);
    dataValue.push(value);
  }
  const stringDataValue = dataValue.map((str) => `"${str}"`);

  const sqlQuery = `INSERT INTO kriterias (${dataName}) VALUES (${stringDataValue})`;
  return dbPool.execute(sqlQuery);
};

const updateKriteria = (body, idKriteria) => {
  const values = {};
  for (const [key, value] of Object.entries(body)) {
    values[key] = value;
  }

  let sqlQuery = "UPDATE kriterias SET ";
  for (const [name, value] of Object.entries(values)) {
    sqlQuery += `${name} = '${value}', `;
  }
  sqlQuery = sqlQuery.slice(0, -2); // Remove the trailing comma and space
  sqlQuery += `WHERE id = ${idKriteria}`; // Assuming you have a record_id variable

  return dbPool.execute(sqlQuery);
};

const deleteKriteria = (idKriteria) => {
  const sqlQuery = `delete from kriterias where id=${idKriteria}`;

  return dbPool.execute(sqlQuery);
};

module.exports = {
  getAllKriteria,
  getSpecificKriteria,
  createNewKriteria,
  updateKriteria,
  deleteKriteria,
};
