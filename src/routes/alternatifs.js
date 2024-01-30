const express = require("express");

const AlternatifController = require("../controller/alternatifs");

const router = express.Router();

//create - post
router.post("/", AlternatifController.createNewAlternatif);

//read - get
router.get("/", AlternatifController.getAllAlternatif);
router.get("/alt", AlternatifController.getAllAlternatifNew);

//read - get by id
router.get("/:idAlternatif", AlternatifController.getSpecificAlternatif);

//update - patch
router.patch("/:idAlternatif", AlternatifController.updateAlternatif);

//delete - delete
router.delete("/:idAlternatif", AlternatifController.deleteAlternatif);

module.exports = router;
