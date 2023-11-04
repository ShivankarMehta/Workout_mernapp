const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getAWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/WorkoutContoroller");
const router = express.Router();

//GET all workouts
router.get("/", getWorkouts);

//GET a single workout
router.get("/:id", getAWorkout);

//POST a new workout
router.post("/", createWorkout);

//Delete a workout
router.delete("/:id", deleteWorkout);

//Update a workout
router.patch("/:id", updateWorkout);

module.exports = router;
