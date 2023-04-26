import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';
import RightNav from '../pages/Shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';


const Main = () => {
    return (
        <div className='container'>
          <Header />
          
          <div className="row">
            <div className="col-lg-3">
                <LeftNav />
            </div>
            <div className="col-lg-6">
                <Outlet />
            </div>
            <div className="col-lg-3">
                <RightNav />
            </div>
          </div>

          <Footer />
        </div>
    );
};

export default Main;