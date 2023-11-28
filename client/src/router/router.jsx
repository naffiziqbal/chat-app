import { createBrowserRouter } from 'react-router-dom'
import App from '../App';
import Signup from '../pages/signup/Signup';
import Login from '../pages/login/Login';
import Home from '../pages/home/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/signup',
                element: <Signup />
            }, {
                path: "/login",
                element: <Login />
            }
        ]
    }

])

export default router;