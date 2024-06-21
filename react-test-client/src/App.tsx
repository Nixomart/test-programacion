import "./index.css";
import { useEffect, useState } from "react";
import { Task } from "./types/Task";
import Layout from "./components/Layout";
import TaskComponent from "./components/TaskComponent";
import FormEditTask from "./components/FormEditTask";
import TaskCompleted from "./components/TaskCompleted";
import DeleteTask from "./components/DeleteTask";
import { getTaks } from "./api/tasksAPI";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/es";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import weekday from "dayjs/plugin/weekday";
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
dayjs.extend(weekday);
dayjs.extend(relativeTime);
dayjs.locale("es");
function App() {
  const [tasks, setTasks] = useState<Array<Task>>([]);
  const [tasksFiltered, setTasksFiltered] = useState<Array<Task>>([]);
  const [editTaskModal, setEditTaskModal] = useState<boolean>(false);
  const [taskSelected, setTaskSelected] = useState<Task>({});
  const [taskCompleted, setTaskCompleted] = useState<boolean>(false);
  const [deleteTask, setDeleteTask] = useState<boolean>(false);
  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await getTaks();
      console.log(tasks);
      setTasks(tasks.payload);  
      setTasksFiltered(tasks.payload);
    };
    fetchTasks();
  }, []);
  useEffect(() => {
    if (!editTaskModal || !taskCompleted || !deleteTask) {
      const fetchTasks = async () => {
        const tasks = await getTaks();
        console.log(tasks);
        setTasks(tasks.payload);
        setTasksFiltered(tasks.payload);
      };
      fetchTasks();
    }
  }, [editTaskModal, taskCompleted, deleteTask]);
  const handleSortBy = (status: string) => {
    if (status === "1") {
      const tasksss = tasks.filter((task) => task.status === "Activa");
      setTasksFiltered(tasksss);
    }
    if (status === "2") {
      const tasksss = tasks.filter((task) => task.status === "Completada");
      setTasksFiltered(tasksss);
    }
    if (status === "3") {
      const tasksss = tasks.filter((task) => task.status === "Diferida");
      setTasksFiltered(tasksss);
    }
    if (status === "4") {
      setTasksFiltered(tasks);
    }
  };
  return (
    <Layout>
      <section className="border-2 border-red-400">
        <div className="mb-5">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleSortBy("1")}
          >
            Activas
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2"
            onClick={() => handleSortBy("2")}
          >
            Completada
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2"
            onClick={() => handleSortBy("3")}
          >
            Diferidas
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2"
            onClick={() => handleSortBy("4")}
          >
            Borrar filtros
          </button>
        </div>
        <div className="grid grid-cols-3 gap-10">
          {tasksFiltered.length === 0 ? (
            <p>Agrega una tarea</p>
          ) : (
            tasksFiltered.map((task: Task) => (
              <TaskComponent
                setDeleteTask={setDeleteTask}
                setTaskCompleted={setTaskCompleted}
                key={task.id}
                task={task}
                setTaskSelected={setTaskSelected}
                setEditTaskModal={setEditTaskModal}
              />
            ))
          )}
          {editTaskModal && (
            <FormEditTask
              taskSelected={taskSelected}
              setEditTaskModal={setEditTaskModal}
            />
          )}
          {taskCompleted && (
            <TaskCompleted
              taskSelected={taskSelected}
              setTaskCompleted={setTaskCompleted}
            />
          )}
          {deleteTask && (
            <DeleteTask
              taskSelected={taskSelected}
              setDeleteTask={setDeleteTask}
            />
          )}
        </div>
      </section>
    </Layout>
  );
}

export default App;
