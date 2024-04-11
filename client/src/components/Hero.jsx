import React from 'react';

import heroImg from '../assets/hero-image.png';
import { FaSearch } from 'react-icons/fa';
import Button from './Button';

const Hero = () => {
    const handleSearch = () => {
        console.log('Search btn clicked');
    }

    return (
        <div className='flex md:items-center items-start justify-between gap-10 py-10 md:flex-row flex-col h-[calc(100vh-100px)]'>
            <div className='flex items-start justify-between gap-3 flex-col w-full'>
                <h1 className='capitalize sm:text-[50px] ss:text-[30px] text-[25px] font-bold text-darkBlue'>The <span className='text-normalBlue'>easiest way</span> <br /> to get your new job</h1>
                <p className='xs:text-[20px] text-[15px]'>Each month, more than 3 million job seekers turn to <br />website in their search for work, making over 140,000 applications every single day</p>
                <div className='flex items-center justify-start xs:w-[300px] w-full my-3 bg-white rounded-full relative'>
                    <div className='flex items-center justify-start py-2 px-3 gap-3'>
                        <div className='ss:flex hidden'>
                            <FaSearch />
                        </div>
                        <input type="text" placeholder='Keyword, location' className='bg-transparent outline-none' />
                    </div>
                    <div className='ss:flex hidden' onClick={handleSearch}>
                        <Button text='Search' bg={true} />
                    </div>
                    <div className='flex ss:hidden absolute right-0'>
                        <button className='p-3 bg-darkBlue hover:bg-normalBlue rounded-full text-white' onClick={handleSearch}>
                            <FaSearch />
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <img src={heroImg} alt="Hero" className='md:w-[500px] xs:w-[400px] w-full' />
            </div>
        </div>
    );
}

export default Hero;