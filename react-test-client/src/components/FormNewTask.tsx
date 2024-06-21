import { useEffect, useRef, useState } from "react";
import { Task } from "../types/Task";
import { addNewTask } from "../api/tasksAPI";
import dayjs from "dayjs";
import { verifyTask } from "../utils/taskUtils";

// eslint-disable-next-line @typescript-eslint/ban-types
export default function FormNewTask({ setNewTask }: { setNewTask: Function }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleTask = useRef<HTMLInputElement>(null);
  const descriptionTask = useRef<HTMLInputElement>(null);
  const [date_to_finish, setDate_to_finish] = useState<string | null>(null);
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (e.target === sectionRef.current) {
        setNewTask(false);
        document.body.style.overflow = "auto";
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
  const handleNewtask = () => {
    const task: Task = {
      name: titleTask.current?.value || "",
      description: descriptionTask.current?.value || "",
      status: "Activa",
      date_created: dayjs().format("YYYY-MM-DD HH:mm:ss"),
      date_to_finish:
        date_to_finish !== null
          ? dayjs(date_to_finish).format("YYYY-MM-DD HH:mm:ss")
          : null,
    };
    const vailidateTask = verifyTask(task);
    if (
     vailidateTask === false
    ) {
      alert("Hubo un error al crear la tarea, verifica los campos");
    } else {
      addNewTask(task).then(() => {
        setNewTask(false);
        document.body.style.overflow = "auto";
      });
       window.location.reload(); 
    }
  };
  return (
    <section
      ref={sectionRef}
      className="fixed inset-0 flex items-center justify-center z-10 bg-gray-500 bg-opacity-50"
    >
      <div className="bg-white p-6 shadow-xl rounded-lg">
        <div className="flex flex-col">
          <input
            ref={titleTask}
            type="text"
            placeholder="Titulo"
            className="mb-2 p-2 border border-gray-300 rounded"
          />
          <input
            ref={descriptionTask}
            type="text"
            placeholder="Descripcion"
            className="mb-2 p-2 border border-gray-300 rounded"
          />
          <input
            onChange={(e) => setDate_to_finish(e.target.value)}
            type="datetime-local"
            placeholder="Descripcion"
            className="mb-2 p-2 border border-gray-300 rounded"
          />
          <button
            onClick={handleNewtask}
            className="p-2 bg-blue-500 text-white rounded"
          >
            Crear
          </button>
        </div>
      </div>
    </section>
  );
}
