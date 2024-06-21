/* eslint-disable @typescript-eslint/ban-types */
import { useEffect, useRef, useState } from "react";
import { Task } from "../types/Task";
import { updateTask } from "../api/tasksAPI";

export default function TaskCompleted({
  setTaskCompleted,
  taskSelected,
}: {
  setTaskCompleted: Function;
  taskSelected: Task;
}) {
  const [taskEdited, setTaskEdited] = useState<Task>(taskSelected)
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (e.target === sectionRef.current) {
        setTaskCompleted(false);
        document.body.style.overflow = "auto";
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
  const handleSetStatus = () =>{
    console.log("TASKKK: ", taskEdited);
    
    updateTask(taskEdited).then(()=>{
      setTaskCompleted(false);
      document.body.style.overflow = "auto";
    })
  }
  return (
    <section
      ref={sectionRef}
      className="fixed inset-0 flex items-center justify-center z-10 bg-gray-500 bg-opacity-50"
    >
      <div className="bg-white flex-col flex p-6 shadow-xl rounded-lg">
        <select  onChange={(e) =>
              setTaskEdited({ ...taskEdited, status: e.target.value })
            }>
          <option value="Activa">Completada</option>
          <option value="Completada">No completada</option>
          {taskSelected.date_to_finish != null && (
            <option value="Diferida">Diferida</option>
          )}
        </select>
      <button onClick={handleSetStatus} className="bg-red-500 mt-5 p-3 text-white rounded-xl">Guardar</button>
      </div>
    </section>
  );
}
