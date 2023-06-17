import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../pages/shared/NavBar';
import Footer from '../pages/Footer/Footer';
// import Discover from '../pages/Home/Discover/Discover';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            {/* <Discover></Discover> */}
            <Footer></Footer>
        </div>
    );
};

export default Main;