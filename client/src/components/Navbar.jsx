import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from './Button';
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);

    const handleShowNav = () => {
        setShowNav(prev => !prev);
    }

    return (
        <nav className='flex items-center justify-between gap-2'>
            <label className='text-darkBlue text-[30px] font-bold'>LOGO</label>
            <div className='md:flex hidden items-center justify-end gap-10'>
                <ul className='md:flex items-center justify-center gap-8'>
                    <li>
                        <NavLink className='hover:text-normalBlue' to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className='hover:text-normalBlue' to='/categories'>Categories</NavLink>
                    </li>
                    <li>
                        <NavLink className='hover:text-normalBlue' to='/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink className='hover:text-normalBlue' to='/jobs'>Jobs</NavLink>
                    </li>
                    <li>
                        <NavLink className='hover:text-normalBlue' to='/recruiters'>Recruiters</NavLink>
                    </li>
                </ul>
                <div className='flex items-center justify-end gap-2'>
                    <Link to='/signup'>
                        <Button text='Register' bg={false} />
                    </Link>
                    <Link to='/login'>
                        <Button text='Login' bg={true} />
                    </Link>
                </div>
            </div>
            <div className={`flex flex-col md:hidden absolute top-[70px] ${showNav ? 'right-[20px]' : 'right-[-100%]'} z-10 bg-white shadow-lg p-4 border w-[300px] rounded-md gap-4 transition-all duration-300 ease-in-out`}>
                <ul className='md:flex gap-8'>
                    <li className='w-full mb-3'>
                        <NavLink className='hover:text-normalBlue' to='/'>Home</NavLink>
                    </li>
                    <li className='w-full mb-3'>
                        <NavLink className='hover:text-normalBlue' to='/categories'>Categories</NavLink>
                    </li>
                    <li className='w-full mb-3'>
                        <NavLink className='hover:text-normalBlue' to='/jobs'>Jobs</NavLink>
                    </li>
                    <li className='w-full mb-3'>
                        <NavLink className='hover:text-normalBlue' to='/about'>About</NavLink>
                    </li>
                    <li className='w-full mb-3'>
                        <NavLink className='hover:text-normalBlue' to='/recruiters'>Recruiters</NavLink>
                    </li>
                </ul>
                <div className='flex flex-col items-start justify-start gap-2'>
                    <Link to='/signup'>
                        <Button text='Register' bg={false} />
                    </Link>
                    <Link to='/login'>
                        <Button text='Login' bg={true} />
                    </Link>
                </div>
            </div>
            <div className='text-black text-[23px] cursor-pointer md:hidden' onClick={handleShowNav}>
                <FaBars />
            </div>
        </nav>
    );
}

export default Navbar;