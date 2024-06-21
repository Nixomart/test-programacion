/* eslint-disable @typescript-eslint/ban-types */
import { CiCircleCheck } from "react-icons/ci";
import { Task } from "../types/Task";
import { GoPencil, GoTrash } from "react-icons/go";
import dayjs from "dayjs";

// eslint-disable-next-line @typescript-eslint/ban-types
export default function TaskComponent({
  task,
  setTaskSelected,
  setEditTaskModal,
  setTaskCompleted,
  setDeleteTask,
}: {
  task: Task;
  setTaskSelected: Function;
  setEditTaskModal: Function;
  setTaskCompleted: Function;
  setDeleteTask: Function;
}) {
  const handleCheckTask = () => {
    setTaskCompleted(true);
    setTaskSelected(task);
  };
  const handleEditTask = () => {
    setTaskSelected(task);
    setEditTaskModal(true);
  };
  const handleDeleteTask = () => {
    setTaskSelected(task);
    setDeleteTask(true);
  };

  return (
    <div
      key={task.id}
      className={`${task.status == "Completada" ? "bg-green-200" : task.status == "Activa" ? "bg-red-200": "bg-slate-200"} col-span-1 p-6 rounded-lg shadow-lg transition-all duration-200 ease-in-out transform hover:scale-105`}
    >
      <div className="flex justify-between items-center mb-4">
        <div>
          <button onClick={handleCheckTask}>
            <CiCircleCheck className="text-green-500 hover:text-green-700 cursor-pointer transition-colors duration-200" />
          </button>
        </div>
        <div>
          <button onClick={handleEditTask}>
            <GoPencil className="text-blue-500 hover:text-blue-700 cursor-pointer transition-colors duration-200" />
          </button>
        </div>
        <div>
          <button onClick={handleDeleteTask}>
            <GoTrash className="text-red-500 hover:text-red-700 cursor-pointer transition-colors duration-200" />
          </button>
        </div>
      </div>
      <div className="text-xl font-bold mb-2 text-gray-800">{task.name}</div>
      <div className="text-sm text-gray-600">{task.status}</div>
      <div className="text-sm text-gray-600 mt-2">{task.description}</div>
      {task.date_to_finish != null ? (
        <div className="text-sm text-gray-600 mt-2">
          Fecha de finalización:{" "}
          {dayjs(task.date_to_finish).fromNow()}
        </div>
      ) : (
        ""
      )}
      

    </div>
  );
}
