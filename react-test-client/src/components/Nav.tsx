import { useState } from "react";
import FormNewTask from "./FormNewTask";
import { Link } from "react-router-dom";

export default function Nav() {
  const [newTask, setNewTask] = useState<boolean>(false);
  const handleNewTask = () => {
    document.body.style.overflow = "hidden";
    setNewTask(!newTask);
  };
  return (
    <nav className="w-1/5 h-[40rem] py-20 px-10  bg-white rounded-xl shadow-2xl">
      <ul>
        <li className="text-3xl mb-10 bg">
          <Link to={"/"}>Tareas</Link>
          <ul className="text-xl">
            <button onClick={handleNewTask} className="py-2">
              Crear Tarea
            </button>
            {newTask && <FormNewTask setNewTask={setNewTask} />}
          </ul>
        </li>
        <li>
          <Link to={"/relaciones"}>Tables, columnas</Link>
        </li>
      </ul>
    </nav>
  );
}
