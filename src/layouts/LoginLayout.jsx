import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';

const LoginLayout = () => {
    return (
        <div className='container row mx-auto pb-4'>
            <div className="col-lg-12">
                <Header />
                <Outlet />
            </div>
        </div>
    );
};

export default LoginLayout;