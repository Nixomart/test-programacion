import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Relaciones from './relaciones/Relaciones';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    
  },
  {
    path: "/relaciones",
    element: <Relaciones />,
  }
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
