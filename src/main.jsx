import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Errorpage from './Components/Errorpage/Errorpage';
import Home from './Components/Home/Home';
import Details from './Components/Details/Details';
import Dashboard from './Components/Dashboard/Dashboard';
import { ToastContainer } from 'react-toastify';
import Statistics from './Components/Statistics/Statistics';
import StoreLocator from './Components/StoreLocator/StoreLocator';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Errorpage></Errorpage>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        loader:()=>fetch('/allItem.json')
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "store",
        element: <StoreLocator></StoreLocator>
      },
      {
        path: "products/:product_id",
        element: <Details></Details>,
        loader:()=>fetch('/allItem.json')
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
