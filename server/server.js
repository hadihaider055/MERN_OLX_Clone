const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./Config/db");
const productRoute = require("./Routes/productRoute");
const userRoute = require("./Routes/userRoute");
const path = require("path");

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/products", productRoute);
app.use("/api/users", userRoute);

// Deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../", "client", "build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../", "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, (req, res) => {
  console.log("Server listening on port " + PORT);
});
