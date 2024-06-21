import { Task } from "../types/Task";

const API_URL = 'http://localhost:8080';
export const getTaks = async () => {
  const response = await fetch(`${API_URL}/allTask`);
  return response.json();
};

export const addNewTask = async (task: Task) => {
  const response = await fetch(`${API_URL}/task`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });
  return response.json();
}

export const updateTask = async (task: Task) => {
  const response = await fetch(`${API_URL}/editTask`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });
  return response.json();
}
export const deleteTask = async (id: number) => {
  console.log(id);
  
  const response = await fetch(`${API_URL}/deleteTask/${id}`, {
    method: 'DELETE',
  });
  return response.json();
}

