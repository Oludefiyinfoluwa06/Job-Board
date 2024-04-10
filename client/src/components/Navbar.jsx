import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <label>LOGO</label>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/jobs'>Jobs</NavLink>
                </li>
                <li>
                    <NavLink to='/categories'>Categories</NavLink>
                </li>
                <li>
                    <NavLink to='/login'>Login</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;