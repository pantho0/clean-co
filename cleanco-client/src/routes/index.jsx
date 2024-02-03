import App from "../App";
import {createBrowserRouter} from "react-router-dom"
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children : [
        {
            path : "about",
            element : <About/>
        },
        {
            path : "contact",
            element : <Contact/>
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