const AlternatifsModel = require("../models/alternatifs");
const PivotAlternatifsModel = require("../models/pivotAlternatifs");

const getAllAlternatif = async (req, res) => {
  try {
    const [data] = await AlternatifsModel.getAllAlternatif();
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

const getAllAlternatifNew = async (req, res) => {
  try {
    const [data] = await AlternatifsModel.getAllAlternatifNew();
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

const getSpecificAlternatif = async (req, res) => {
  try {
    const { idAlternatif } = req.params;
    const [data] = await AlternatifsModel.getSpecificAlternatif(idAlternatif);
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

const createNewAlternatif = async (req, res) => {
  const { body } = req;
  // console.log(body);
  try {
    const alternatif = await AlternatifsModel.createNewAlternatif(body);
    const lastId = alternatif[0].insertId;
    await PivotAlternatifsModel.createCriteriaAlternatif(body, lastId);
    await PivotAlternatifsModel.createPositionAlternatif(body, lastId);
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

const updateAlternatif = async (req, res) => {
  const { idAlternatif } = req.params;
  const { body } = req;
  try {
    await AlternatifsModel.updateAlternatif(body, idAlternatif);
    await PivotAlternatifsModel.deleteCriteriaAlternatif(idAlternatif);
    await PivotAlternatifsModel.createCriteriaAlternatif(body, idAlternatif);
    await PivotAlternatifsModel.deletePositionAlternatif(idAlternatif);
    await PivotAlternatifsModel.createPositionAlternatif(body, idAlternatif);
    res.json({
      message: "update alt success",
      data: {
        id: idAlternatif,
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

const deleteAlternatif = async (req, res) => {
  const { idAlternatif } = req.params;
  try {
    await AlternatifsModel.deleteAlternatif(idAlternatif);
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
  getAllAlternatif,
  getAllAlternatifNew,
  getSpecificAlternatif,
  createNewAlternatif,
  updateAlternatif,
  deleteAlternatif,
};
