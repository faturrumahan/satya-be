const JurusansModel = require("../models/jurusans");
const PivotJurusansModel = require("../models/pivotJurusans");

const getAllJurusan = async (req, res) => {
  try {
    const [data] = await JurusansModel.getAllJurusan();
    res.json({
      message: "get alt success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      serverMessage: error,
    });
  }
};

const getSpecificJurusan = async (req, res) => {
  try {
    const { idJurusan } = req.params;
    const [data] = await JurusansModel.getSpecificJurusan(idJurusan);
    res.json({
      message: "get specific alt success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      serverMessage: error,
    });
  }
};

const createNewJurusan = async (req, res) => {
  const { body } = req;
  console.log(body);
  try {
    const jurusan = await JurusansModel.createNewJurusan(body);
    const lastId = jurusan[0].insertId;
    await PivotJurusansModel.createValueJurusan(body, lastId);
    res.json({
      message: "add new alt success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      serverMessage: error,
    });
  }
};

const updateJurusan = async (req, res) => {
  const { idJurusan } = req.params;
  const { body } = req;
  try {
    await JurusansModel.updateJurusan(body, idJurusan);
    await PivotJurusansModel.deleteValueJurusan(idJurusan);
    await PivotJurusansModel.createValueJurusan(body, idJurusan);
    res.json({
      message: "update alt success",
      data: {
        id: idJurusan,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      serverMessage: error,
    });
  }
};

const deleteJurusan = async (req, res) => {
  const { idJurusan } = req.params;
  try {
    await JurusansModel.deleteJurusan(idJurusan);
    res.json({
      message: "delete alt success",
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      serverMessage: error,
    });
  }
};

module.exports = {
  getAllJurusan,
  getSpecificJurusan,
  createNewJurusan,
  updateJurusan,
  deleteJurusan,
};
