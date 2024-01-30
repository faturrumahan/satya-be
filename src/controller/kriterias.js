const KriteriasModel = require("../models/kriterias");

const getAllKriteria = async (req, res) => {
  try {
    const [data] = await KriteriasModel.getAllKriteria();
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

const getSpecificKriteria = async (req, res) => {
  try {
    const { idKriteria } = req.params;
    const [data] = await KriteriasModel.getSpecificKriteria(idKriteria);
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

const createNewKriteria = async (req, res) => {
  const { body } = req;
  try {
    await KriteriasModel.createNewKriteria(body);
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

const updateKriteria = async (req, res) => {
  const { idKriteria } = req.params;
  const { body } = req;
  try {
    await KriteriasModel.updateKriteria(body, idKriteria);
    res.json({
      message: "update alt success",
      data: {
        id: idKriteria,
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

const deleteKriteria = async (req, res) => {
  const { idKriteria } = req.params;
  try {
    await KriteriasModel.deleteKriteria(idKriteria);
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
  getAllKriteria,
  getSpecificKriteria,
  createNewKriteria,
  updateKriteria,
  deleteKriteria,
};
