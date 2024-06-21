/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
import { useEffect, useRef } from "react";
import { deleteTask } from "../api/tasksAPI";
import { Task } from "../types/Task";

export default function DeleteTask({
  setDeleteTask,
  taskSelected,
}: {
  setDeleteTask: Function;
  taskSelected: Task;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    
    const handleClick = (e: MouseEvent) => {
      console.log("CLCIK ", e.target === sectionRef.current);
      if (e.target === sectionRef.current) {
        setDeleteTask(false);
        document.body.style.overflow = "auto";
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
  const handleDeleteTask = () => {
    deleteTask(taskSelected.id!).then(() => {
      setDeleteTask(false);

    });
  };
  return (
    <section
      ref={sectionRef}
      className="fixed inset-0 flex items-center justify-center z-10 bg-gray-500 bg-opacity-50"
    >
      <div className="bg-white p-6 shadow-xl rounded-lg">
        <div className="flex flex-col">
          <button
            onClick={handleDeleteTask}
            className="p-2 bg-red-500 text-white rounded"
          >
            Eliminar
          </button>
        </div>
      </div>
    </section>
  );
}
