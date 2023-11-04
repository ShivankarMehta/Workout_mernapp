import React from "react";

const Workoutdetails = ({ workout }) => {
  return (
    <div>
      <h4>{workout.title}</h4>
      <p>{workout.load}</p>
      <p>{workout.reps}</p>
      <p>{workout.createdAt}</p>
    </div>
  );
};

export default workoutdetails;
