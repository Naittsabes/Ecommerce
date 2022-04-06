const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");

dotenv.config();
app.use(cors({ origin: "http://localhost:3000" }));

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Conexion  DB  exitosa"))
  .catch((error) => console.error("Error conecting DB", error));

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

app.listen(process.env.PORT || 8000, () => {
  console.log("Server is running");
});
