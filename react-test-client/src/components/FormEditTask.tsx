/* eslint-disable @typescript-eslint/ban-types */
import { useEffect, useRef, useState } from "react";
import { Task } from "../types/Task";
import { updateTask } from "../api/tasksAPI";
import dayjs from "dayjs";
import { verifyTask } from "../utils/taskUtils";

// eslint-disable-next-line @typescript-eslint/ban-types
export default function FormEditTask({
  setEditTaskModal,
  taskSelected,
}: {
  setEditTaskModal: Function;
  taskSelected: Task | null;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [taskEdited, setTaskEdited] = useState<Task | null>(taskSelected);
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (e.target === sectionRef.current) {
        setEditTaskModal(false);
        document.body.style.overflow = "auto";
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
  const handleEditTask = () => {
    const validator = verifyTask(taskEdited!);
    if (!validator) {
      alert("Verifica los datos ingresados");
    }else{

      updateTask(taskEdited!).then(() => {
        setEditTaskModal(false);
      });
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
            onChange={(e) =>
              setTaskEdited({ ...taskEdited, name: e.target.value })
            }
            value={taskEdited!.name}
            type="text"
            placeholder="Titulo"
            className="mb-2 p-2 border border-gray-300 rounded"
          />
          <input
            onChange={(e) =>
              setTaskEdited({ ...taskEdited, description: e.target.value })
            }
            value={taskEdited!.description}
            type="text"
            placeholder="Titulo"
            className="mb-2 p-2 border border-gray-300 rounded"
          />
          <select
            value={taskEdited!.status}
            onChange={(e) =>
              setTaskEdited({ ...taskEdited, status: e.target.value })
            }
            name=""
            id=""
          >
            <option value="Activa">Pendiente</option>
            <option value="Completada">En proceso</option>
            <option value="Diferida">Terminada</option>
          </select>
          <input
            onChange={(e) =>
              setTaskEdited({
                ...taskEdited,
                date_to_finish: dayjs(e.target.value).format(
                  "YYYY-MM-DDTHH:mm:ss"
                ),
              })
            }
            type="datetime-local"
            placeholder="Fecha de finalización"
            className="mb-2 p-2 border border-gray-300 rounded"
          />
          <button
            onClick={handleEditTask}
            className="p-2 bg-green-500 text-white rounded"
          >
            Editar
          </button>
        </div>
      </div>
    </section>
  );
}
