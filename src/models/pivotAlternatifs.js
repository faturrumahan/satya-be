const dbPool = require("../config/db_keeb_test");

const createCriteriaAlternatif = async (body, lastId) => {
  let result;
  const dataName = ["id_kriteria", "id_alternatif", "nilai"];
  const kriterias = await dbPool.execute("select * from kriterias");

  for (const [key, value] of Object.entries(body)) {
    if (key !== "nama" && key !== "id_jurusan") {
      for (let i = 0; i < kriterias[0].length; i++) {
        if (key === kriterias[0][i].nama) {
          const dataValue = [kriterias[0][i].id, lastId, value];
          const stringDataValue = dataValue.map((str) => `"${str}"`);
          const sqlQuery = `INSERT INTO kriteriavalues (${dataName}) VALUES (${stringDataValue})`;
          result = await dbPool.execute(sqlQuery);
        }
      }
    }
  }
  return result;
};

const createPositionAlternatif = async (body, lastId) => {
  let result;
  const dataName = ["id_posisi", "id_alternatif"];
  const posisis = await dbPool.execute("select * from posisis");
  for (const [key, value] of Object.entries(body)) {
    if (key === "posisi") {
      const selected = value.split(",");
      for (let i = 0; i < selected.length; i++) {
        console.log(selected[i]);
        for (let j = 0; j < posisis[0].length; j++) {
          if (selected[i] === posisis[0][j].nama) {
            const dataValue = [posisis[0][j].id, lastId];
            const stringDataValue = dataValue.map((str) => `"${str}"`);
            const sqlQuery = `INSERT INTO pilihan_posisis (${dataName}) VALUES (${stringDataValue})`;
            result = await dbPool.execute(sqlQuery);
          }
        }
      }
    }
  }
  return result;
};

const deleteCriteriaAlternatif = (idAlternatif) => {
  const sqlQuery = `delete from kriteriavalues where id_alternatif=${idAlternatif}`;

  return dbPool.execute(sqlQuery);
};

const deletePositionAlternatif = (idAlternatif) => {
  const sqlQuery = `delete from pilihan_posisis where id_alternatif=${idAlternatif}`;

  return dbPool.execute(sqlQuery);
};

module.exports = {
  createCriteriaAlternatif,
  createPositionAlternatif,
  deleteCriteriaAlternatif,
  deletePositionAlternatif,
};
