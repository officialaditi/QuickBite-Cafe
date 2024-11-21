import colors from "colors";
import express from "express";
import dotenv from "dotenv";
import ConnectDB from "./config/db.js";
import FoodRouter from "./routers/FoodRouter.js";
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";

dotenv.config();
ConnectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("api running");
});

// Api
app.use("/api/foods", FoodRouter);

// error middlewares
app.use(notFound);
app.use(errorHandler);
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(
    `Server started at ${process.env.NODE_ENV} mode at ${port} port .....`
      .inverse
  );
});
