const dbPool = require("../config/db_keeb_test");

const getAllDetailAlternatifData = () => {
  const sqlQuery = `SELECT 
    alternatifs.*, 
    jurusans.nama AS nama_jurusan, 
    kriteriavalues.nilai, 
    kriterias.nama AS nama_kriteria, 
    kriterias.tipe, 
    posisis.nama AS nama_posisi
    FROM 
    alternatifs
    JOIN 
    jurusans ON jurusans.id = alternatifs.id_jurusan
    JOIN 
    kriteriavalues ON kriteriavalues.id_alternatif = alternatifs.id
    JOIN 
    kriterias ON kriterias.id = kriteriavalues.id_kriteria
    JOIN 
    pilihan_posisis ON pilihan_posisis.id_alternatif = alternatifs.id
    JOIN 
    posisis ON posisis.id = pilihan_posisis.id_posisi
    ORDER BY 
    alternatifs.id;`;
  return dbPool.execute(sqlQuery);
};

const getSpecificAlternatifData = (idAlternatif) => {
  const sqlQuery = `SELECT 
    alternatifs.*, 
    jurusans.nama AS nama_jurusan, 
    kriteriavalues.nilai, 
    kriterias.nama AS nama_kriteria, 
    kriterias.tipe, 
    posisis.nama AS nama_posisi
    FROM 
    alternatifs
    JOIN 
    jurusans ON jurusans.id = alternatifs.id_jurusan
    JOIN 
    kriteriavalues ON kriteriavalues.id_alternatif = alternatifs.id
    JOIN 
    kriterias ON kriterias.id = kriteriavalues.id_kriteria
    JOIN 
    pilihan_posisis ON pilihan_posisis.id_alternatif = alternatifs.id
    JOIN 
    posisis ON posisis.id = pilihan_posisis.id_posisi
    WHERE 
    alternatifs.id = ${idAlternatif}
    ORDER BY 
    alternatifs.id;`;
  return dbPool.execute(sqlQuery);
};

const getAllDetailJurusanData = () => {
  const sqlQuery = `SELECT
    jurusans.id,
    jurusans.nama AS nama_jurusan,
    posisis.nama AS nama_posisi,
    jurusan_values.nilai
    FROM
    jurusans
    JOIN
    jurusan_values ON jurusan_values.id_jurusan = jurusans.id
    JOIN
    posisis ON posisis.id = jurusan_values.id_posisi
    ORDER BY 
    jurusans.id;`;
  return dbPool.execute(sqlQuery);
};

const getSpecificJurusanData = (idJurusan) => {
  const sqlQuery = `SELECT
    jurusans.id,
    jurusans.nama AS nama_jurusan,
    posisis.nama AS nama_posisi,
    jurusan_values.nilai
    FROM
    jurusans
    JOIN
    jurusan_values ON jurusan_values.id_jurusan = jurusans.id
    JOIN
    posisis ON posisis.id = jurusan_values.id_posisi
    WHERE 
    jurusans.id = ${idJurusan}
    ORDER BY 
    jurusans.id;`;
  return dbPool.execute(sqlQuery);
};

module.exports = {
  getAllDetailAlternatifData,
  getSpecificAlternatifData,
  getAllDetailJurusanData,
  getSpecificJurusanData,
};
