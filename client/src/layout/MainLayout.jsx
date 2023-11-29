import { Outlet } from 'react-router-dom';
import Header from '../Components/header/Header';

const MainLayout = () => {
    return (
        <div className='max-w-[1440px] mx-auto'>
            <Header />
            <Outlet />
        </div>
    );
};

export default MainLayout;
