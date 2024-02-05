import App from "../App";
import {createBrowserRouter} from "react-router-dom"
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import PrivateRoute from "./PrivateRoute";
import Services from "../pages/Services";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children : [
        {
          index : true,
          element : <Home/>
        },
        {
            path : "about",
            element : <PrivateRoute><About/></PrivateRoute>
        },
        {
            path : "contact",
            element : <Contact/>
        },
        {
          path : "services",
          element : <Services/>
        }
      ]
    },
    {
        path : "/login",
        element : <Login/>
    },
    {
        path : "/register",
        element : <Register/>
    }
  ]);

export default router;