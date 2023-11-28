import { Outlet } from 'react-router-dom';
import Header from '../Components/header/Header';

const MainLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export default MainLayout;
