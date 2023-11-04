require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workout");

//express app
const app = express();

//middleware
app.use(express.json());

//routes
app.use("/api/workouts", workoutRoutes);

//connect to DB
mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
