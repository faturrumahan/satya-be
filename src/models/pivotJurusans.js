const dbPool = require("../config/db_keeb_test");

const createValueJurusan = async (body, lastId) => {
  let result;
  const dataName = ["id_posisi", "id_jurusan", "nilai"];
  const posisis = await dbPool.execute("select * from posisis");

  for (const [key, value] of Object.entries(body)) {
    if (key !== "nama") {
      for (let i = 0; i < posisis[0].length; i++) {
        if (key === posisis[0][i].nama) {
          const dataValue = [posisis[0][i].id, lastId, value];
          const stringDataValue = dataValue.map((str) => `"${str}"`);
          const sqlQuery = `INSERT INTO jurusan_values (${dataName}) VALUES (${stringDataValue})`;
          result = await dbPool.execute(sqlQuery);
        }
      }
    }
  }
  return result;
};

const deleteValueJurusan = (idJurusan) => {
  const sqlQuery = `delete from jurusan_values where id_jurusan=${idJurusan}`;

  return dbPool.execute(sqlQuery);
};

module.exports = {
  createValueJurusan,
  deleteValueJurusan,
};
