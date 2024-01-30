const express = require("express");

const KriteriaController = require("../controller/kriterias");

const router = express.Router();

//create - post
router.post("/", KriteriaController.createNewKriteria);

//read - get
router.get("/", KriteriaController.getAllKriteria);

//read - get by id
router.get("/:idKriteria", KriteriaController.getSpecificKriteria);

//update - patch
router.patch("/:idKriteria", KriteriaController.updateKriteria);

//delete - delete
router.delete("/:idKriteria", KriteriaController.deleteKriteria);

module.exports = router;
