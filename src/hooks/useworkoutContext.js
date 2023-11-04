import { WorkoutsContext } from "../context/workContext";
import { useContext } from "react";

export const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext);

  if (!context) {
    throw Error("useworkoutcontext must be provided with cintext provider");
  }

  return context;
};
