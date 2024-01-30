const SummariesModel = require("../models/summaries");

const combineAlt = (data) => {
  let pivotedData = Object.values(
    data.reduce((acc, item) => {
      if (!acc[item.id]) {
        acc[item.id] = {
          nama: item.nama,
          nama_jurusan: item.nama_jurusan,
          posisi: [item.nama_posisi],
        };
      } else {
        acc[item.id].posisi.push(item.nama_posisi);
      }

      acc[item.id][item.nama_kriteria] = item.nilai;
      return acc;
    }, {})
  ).map((item) => {
    item.posisi = [...new Set(item.posisi)].join(","); // Remove duplicates and combine multiple positions with comma separator
    return item;
  });
  return pivotedData;
};

const combineJur = (data) => {
  let transformedData = Object.values(
    data.reduce((acc, item) => {
      if (!acc[item.id]) {
        acc[item.id] = {
          id: item.id,
          nama_jurusan: item.nama_jurusan,
        };
      }
      acc[item.id][item.nama_posisi] = item.nilai;
      return acc;
    }, {})
  ).map((item) => {
    return item;
  });
  return transformedData;
};

const getAllAlternatifData = async (req, res) => {
  try {
    const [data] = await SummariesModel.getAllDetailAlternatifData();
    // console.log(data);
    const pivotedData = combineAlt(data);
    res.json({
      message: "get all data success",
      data: pivotedData,
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      serverMessage: error,
    });
  }
};

const getSpesificAlternatifData = async (req, res) => {
  try {
    const { idSummary } = req.params;
    const [data] = await SummariesModel.getSpecificAlternatifData(idSummary);
    const pivotedData = combineAlt(data);
    res.json({
      message: "get all data success",
      data: pivotedData,
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      serverMessage: error,
    });
  }
};

const getAllJurusanData = async (req, res) => {
  try {
    const [data] = await SummariesModel.getAllDetailJurusanData();
    // console.log(data);
    const pivotedData = combineJur(data);
    res.json({
      message: "get all data success",
      data: pivotedData,
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      serverMessage: error,
    });
  }
};

const getSpesificJurusanData = async (req, res) => {
  try {
    const { idSummary } = req.params;
    const [data] = await SummariesModel.getSpecificJurusanData(idSummary);
    const pivotedData = combineJur(data);
    res.json({
      message: "get all data success",
      data: pivotedData,
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      serverMessage: error,
    });
  }
};

module.exports = {
  getAllAlternatifData,
  getSpesificAlternatifData,
  getAllJurusanData,
  getSpesificJurusanData,
};
