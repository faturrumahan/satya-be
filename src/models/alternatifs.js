const dbPool = require("../config/db_keeb_test");

const getAllAlternatif = () => {
  const sqlQuery = "select * from alternatifs order by id asc";

  return dbPool.execute(sqlQuery);
};

const getAllAlternatifNew = () => {
  const sqlQuery = `SELECT 
  alternatifs.id, 
  alternatifs.nama, 
  jurusans.nama AS id_jurusan
  FROM 
  alternatifs 
  JOIN 
  jurusans ON jurusans.id = alternatifs.id_jurusan 
  ORDER BY 
  alternatifs.id;`;

  return dbPool.execute(sqlQuery);
};

const getSpecificAlternatif = (idAlternatif) => {
  const sqlQuery = `select * from alternatifs where id =${idAlternatif}`;

  return dbPool.execute(sqlQuery);
};

const createNewAlternatif = (body) => {
  var dataName = [];
  var dataValue = [];

  for (const [key, value] of Object.entries(body)) {
    if (key === "nama" || key === "id_jurusan") {
      dataName.push(key);
      dataValue.push(value);
    }
  }
  const stringDataValue = dataValue.map((str) => `"${str}"`);

  const sqlQuery = `INSERT INTO alternatifs (${dataName}) VALUES (${stringDataValue})`;
  return dbPool.execute(sqlQuery);
};

const updateAlternatif = (body, idAlternatif) => {
  const values = {};
  for (const [key, value] of Object.entries(body)) {
    if (key === "nama" || key === "id_jurusan") {
      values[key] = value;
    }
  }

  let sqlQuery = "UPDATE alternatifs SET ";
  for (const [name, value] of Object.entries(values)) {
    sqlQuery += `${name} = '${value}', `;
  }
  sqlQuery = sqlQuery.slice(0, -2); // Remove the trailing comma and space
  sqlQuery += `WHERE id = ${idAlternatif}`; // Assuming you have a record_id variable

  return dbPool.execute(sqlQuery);
};

const deleteAlternatif = (idAlternatif) => {
  const sqlQuery = `delete from alternatifs where id=${idAlternatif}`;

  return dbPool.execute(sqlQuery);
};

module.exports = {
  getAllAlternatif,
  getAllAlternatifNew,
  getSpecificAlternatif,
  createNewAlternatif,
  updateAlternatif,
  deleteAlternatif,
};
