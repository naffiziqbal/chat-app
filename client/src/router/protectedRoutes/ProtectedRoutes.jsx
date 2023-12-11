import { useContext } from "react";
import { Navigate, useLocation } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
const ProtectedRoutes = ({ children }) => {
    const { loading, currentUser } = useContext(UserContext)
    const location = useLocation()
    if (loading) {
        return <div>Loading</div>
    }
    if (!currentUser) {
        return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
    }
    if (!loading && currentUser) {
        return children
    }
};

export default ProtectedRoutes;
