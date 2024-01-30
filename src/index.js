require("dotenv").config();
const PORT = process.env.PORT || 5000;

const express = require("express");
const cors = require("cors");
const multer = require("multer");

const alternatifsRoutes = require("./routes/alternatifs");
const kriteriasRoutes = require("./routes/kriterias");
const jurusansRoutes = require("./routes/jurusans");
const posisisRoutes = require("./routes/posisis");
const summariesRoutes = require("./routes/summaries");

const middlewareLogRequest = require("./middleware/logs");

const app = express();
const upload = multer();

app.use(cors());
app.use(middlewareLogRequest);
app.use(express.json());
app.use(upload.any());

app.use("/alternatif", alternatifsRoutes);
app.use("/kriteria", kriteriasRoutes);
app.use("/jurusan", jurusansRoutes);
app.use("/posisi", posisisRoutes);
app.use("/hasil", summariesRoutes);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
