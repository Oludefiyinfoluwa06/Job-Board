import React from 'react';

import heroImg from '../../assets/hero-image.png';
import { FaSearch } from 'react-icons/fa';
import Button from '../Button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Hero = () => {
    const handleSearch = () => {
        console.log('Search btn clicked');
    }

    useGSAP(() => {
        gsap.from('#right', {
            duration: 1,
            opacity: 0,
            x: -200,
            stagger: 0.3
        });

        gsap.from('#left', {
            duration: 1,
            opacity: 0,
            x: 200,
            stagger: 0.3
        });
    }, []);

    return (
        <div className='flex md:items-center items-start justify-between gap-10 py-10 md:flex-row flex-col'>
            <div className='flex items-start justify-between gap-3 flex-col w-full'>
                <h1 id='right' className='capitalize sm:text-[50px] ss:text-[30px] text-[25px] font-bold text-darkBlue'>The <span className='text-normalBlue'>easiest way</span> <br /> to get your new job</h1>
                <p id='right' className='xs:text-[20px] text-[15px]'>Each month, more than 3 million job seekers turn to <br />website in their search for work, making over 140,000 applications every single day</p>
                <div id='right' className='flex items-center justify-start xs:w-[300px] w-full my-3 bg-white rounded-md relative'>
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
                        <button className='p-3 bg-darkBlue hover:bg-normalBlue rounded-md text-white' onClick={handleSearch}>
                            <FaSearch />
                        </button>
                    </div>
                </div>
            </div>
            <div id='left'>
                <img src={heroImg} alt="Hero" className='md:w-[500px] xs:w-[400px] w-full' />
            </div>
        </div>
    );
}

export default Hero;