import React from "react";
import { useWorkoutsContext } from "../hooks/useworkoutContext";
const Workoutdetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();
  const handleClick = async () => {
    const response = await fetch("/api/workouts" + workout._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };
  return (
    <div>
      <h4>{workout.title}</h4>
      <p>{workout.load}</p>
      <p>{workout.reps}</p>
      <p>{workout.createdAt}</p>
      <span onClick={handleClick}>delete</span>
    </div>
  );
};

export default workoutdetails;
