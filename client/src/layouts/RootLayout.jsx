import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const RootLayout = () => {
    return (
        <div className='font-poppins'>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default RootLayout;