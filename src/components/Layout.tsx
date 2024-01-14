import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import ButtonAppBar from "./ButtonAppBar";

const Layout = () => {

    return (
        <div className="container-fluid">
                <ButtonAppBar></ButtonAppBar>

                {/* Main Content */}
                <div className="col-7">
                    <Outlet></Outlet>
                </div>
        </div>

    );
};


export default Layout;