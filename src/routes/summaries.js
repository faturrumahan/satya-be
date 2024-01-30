const express = require("express");

const SummaryController = require("../controller/summaries");

const router = express.Router();

//read - get
router.get("/alternatif", SummaryController.getAllAlternatifData);

//read - get by id
router.get(
  "/alternatif/:idSummary",
  SummaryController.getSpesificAlternatifData
);

//read - get
router.get("/jurusan", SummaryController.getAllJurusanData);

// read - get by id
router.get("/jurusan/:idSummary", SummaryController.getSpesificJurusanData);

module.exports = router;
