import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import BLog from './Pages/Blog/BLog';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import User from './Pages/User/User';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Root></Root>,
    children:[

        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/about",
          element:<About></About>
        },
        {
         path:"/services",
         element:<Services></Services>
        },
        {
          path:"/blog",
          element:<BLog></BLog>
        },
        {
          path:"/contact",
          element:<Contact></Contact>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
         path:"/register",
         element:<Register></Register>
          
        },
        {
          path:"/user",
          element:<User></User>
        },
        {
          path:"*",
          element:<h1>404 Not Found</h1>
        }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
