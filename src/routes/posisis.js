const express = require("express");

const PosisiController = require("../controller/posisis");

const router = express.Router();

//create - post
router.post("/", PosisiController.createNewPosisi);

//read - get
router.get("/", PosisiController.getAllPosisi);

//read - get by id
router.get("/:idPosisi", PosisiController.getSpecificPosisi);

//update - patch
router.patch("/:idPosisi", PosisiController.updatePosisi);

//delete - delete
router.delete("/:idPosisi", PosisiController.deletePosisi);

module.exports = router;
