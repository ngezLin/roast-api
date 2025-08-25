const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const roastRoutes = require("./routes/roast");

const app = express();

//middleware
app.use(cors());
app.use(bodyParser.json());

//routes
app.use("/api", roastRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
