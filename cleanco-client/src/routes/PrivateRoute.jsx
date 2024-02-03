import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({children}) => {
    const {user, isLoading} = useAuth()

    if(isLoading){
        return <div className="flex justify-center items-center h-screen"><progress className="progress w-56"></progress></div>
    }

    if(!user){
        return <Navigate to="/login"></Navigate>
    }

    return children;
};

export default PrivateRoute;