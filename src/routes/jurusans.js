const express = require("express");

const JurusanController = require("../controller/jurusans");

const router = express.Router();

//create - post
router.post("/", JurusanController.createNewJurusan);

//read - get
router.get("/", JurusanController.getAllJurusan);

//read - get by id
router.get("/:idJurusan", JurusanController.getSpecificJurusan);

//update - patch
router.patch("/:idJurusan", JurusanController.updateJurusan);

//delete - delete
router.delete("/:idJurusan", JurusanController.deleteJurusan);

module.exports = router;
