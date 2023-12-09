import { useContext } from "react";
import { Navigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
const ProtectedRoutes = ({ children }) => {
    const { loading, currentUser } = useContext(UserContext)
    if (loading) {
        return <div>Loading</div>
    }
    if (!currentUser) {
        return <Navigate to='/login' />
    }
    if (!loading && currentUser) {
        return children
    }
};

export default ProtectedRoutes;
