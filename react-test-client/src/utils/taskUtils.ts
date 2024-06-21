import dayjs from "dayjs";
import { Task } from "../types/Task";

export const verifyTask = (task: Task): boolean => {
  if (
    task.name === undefined ||
    task.name === "" ||
    task.description === "" ||
    task.name.length < 3 ||
    task.name.length > 100 ||
    task.name === task?.name.toUpperCase() ||
    !/^[\w\s$#%&()[\];]+$/.test(task.name) ||
    (task.date_to_finish !== null &&
      (dayjs(task.date_to_finish).day() === 0 ||
        dayjs(task.date_to_finish).day() === 6 ||
        dayjs(task.date_to_finish).isAfter(dayjs().add(30, "day"))))
  ) {
    return false;
  }
  return true;
};
