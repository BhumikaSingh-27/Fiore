import { Navigate, useLocation } from "react-router-dom"

export const AuthWrapper = ({children}) =>{
    const location = useLocation();

    return localStorage.getItem("encodedToken") ? children : <Navigate to="/login"  state={{from:location}}/>
}