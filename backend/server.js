import colors from "colors";
import express from "express";
import dotenv from "dotenv";
import ConnectDB from "./config/db.js";
import FoodRouter from "./routers/FoodRouter.js";
import userRouter from './routers/userRouter.js';
import ReservationRouter from './routers/ReservationRouter.js';
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";

dotenv.config();
ConnectDB();

const app = express();
app.use(express.json())   // request body parse

app.get("/", (req, res) => {
  res.send("api running");
});

// Api
app.use("/api/foods", FoodRouter);
app.use('/api/users', userRouter);
app.use('/api/reservation', ReservationRouter);

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
