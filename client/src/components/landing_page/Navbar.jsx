import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import Button from '../Button';
import { FaBars } from 'react-icons/fa'
import gsap from 'gsap';

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);

    const handleShowNav = () => {
        setShowNav(prev => !prev);
    }

    useGSAP(() => {
        gsap.from('.logo', {
            duration: 1,
            opacity: 0,
            y: '-100%'
        });

        gsap.from('.nav-link', {
            duration: 1,
            opacity: 0,
            y: '-100%',
            stagger: 0.3
        });

        gsap.from('#btn', {
            duration: 1,
            opacity: 0,
            y: '-100%',
            stagger: 0.3
        });

    }, []);

    return (
        <nav className='flex items-center justify-between gap-2'>
            <label className='text-darkBlue text-[30px] font-bold logo'>LOGO</label>
            <div className='md:flex hidden items-center justify-end gap-10'>
                <ul className='md:flex items-center justify-center gap-8'>
                    <li className='nav-link'>
                        <NavLink className='hover:text-normalBlue' to='/'>Home</NavLink>
                    </li>
                    <li className='nav-link'>
                        <NavLink className='hover:text-normalBlue' to='/categories'>Categories</NavLink>
                    </li>
                    <li className='nav-link'>
                        <NavLink className='hover:text-normalBlue' to='/jobs'>Jobs</NavLink>
                    </li>
                    <li className='nav-link'>
                        <NavLink className='hover:text-normalBlue' to='/recruiters'>Recruiters</NavLink>
                    </li>
                </ul>
                <div className='flex items-center justify-end gap-2'>
                    <div id='btn'>
                        <Link to='/signup'>
                            <Button text='Register' bg={false} />
                        </Link>
                    </div>
                    <div id='btn'>
                        <Link to='/login'>
                            <Button text='Login' bg={true} />
                        </Link>
                    </div>
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
            <div className='text-black text-[23px] cursor-pointer md:hidden' id='btn' onClick={handleShowNav}>
                <FaBars />
            </div>
        </nav>
    );
}

export default Navbar;