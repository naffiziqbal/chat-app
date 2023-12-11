import { createBrowserRouter } from 'react-router-dom'
import App from '../App';
import Signup from '../pages/signup/Signup';
import Login from '../pages/login/Login';
import Home from '../pages/home/Home';
import Chatbox from '../Components/ChatBox/Chatbox';
import Users from '../pages/users/Users';
import ProtectedRoutes from './protectedRoutes/ProtectedRoutes';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <ProtectedRoutes>
                    <Home />
                </ProtectedRoutes>
            },
            {
                path: "/users",
                element: <ProtectedRoutes>
                    <Users />
                </ProtectedRoutes>
            },
            {
                path: "chat/:id",
                element: <ProtectedRoutes>
                    <Home />
                </ProtectedRoutes>
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: "/login",
                element: <Login />
            },
        ]
    },


])

export default router;
