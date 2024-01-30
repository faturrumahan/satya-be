const PosisisModel = require("../models/posisis");

const getAllPosisi = async (req, res) => {
  try {
    const [data] = await PosisisModel.getAllPosisi();
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

const getSpecificPosisi = async (req, res) => {
  try {
    const { idPosisi } = req.params;
    const [data] = await PosisisModel.getSpecificPosisi(idPosisi);
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

const createNewPosisi = async (req, res) => {
  const { body } = req;
  try {
    await PosisisModel.createNewPosisi(body);
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

const updatePosisi = async (req, res) => {
  const { idPosisi } = req.params;
  const { body } = req;
  try {
    await PosisisModel.updatePosisi(body, idPosisi);
    res.json({
      message: "update alt success",
      data: {
        id: idPosisi,
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

const deletePosisi = async (req, res) => {
  const { idPosisi } = req.params;
  try {
    await PosisisModel.deletePosisi(idPosisi);
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
  getAllPosisi,
  getSpecificPosisi,
  createNewPosisi,
  updatePosisi,
  deletePosisi,
};
