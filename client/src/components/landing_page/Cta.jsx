import React from 'react';

import cta1 from '../../assets/cta1.png';
import cta2 from '../../assets/cta2.png';
import { FaEnvelope } from 'react-icons/fa';
import Button from '../Button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Cta = () => {
    useGSAP(() => {
        gsap.from('#cta-container', {
            scrollTrigger: {
                trigger: '#cta-container'
            },
            duration: 1,
            scale: 0,
        });

        gsap.from('#cta', {
            scrollTrigger: {
                trigger: '#cta'
            },
            delay: 1,
            duration: 1,
            scale: 0,
            stagger: 0.5
        });
    }, []);

    return (
        <div className='flex items-center md:justify-between justify-center gap-5 p-[30px] bg-lightBlue my-[100px] rounded-lg' id='cta-container'>
            <img src={cta1} alt="Cta1" className='md:block hidden' id='cta' />

            <div className='flex items-center justify-center flex-col gap-2' id='cta'>
                <h1 className='text-2xl font-bold text-darkBlue text-center'>Get updated with new jobs</h1>
                <form className='flex items-center justify-center gap-3 bg-white p-3 rounded-lg'>
                    <FaEnvelope className='text-3xl text-darkBlue' />
                    <input type="text" placeholder='Enter your email address' className='outline-none border-0 text-[13px] md:w-[200px] w-full' />
                    <Button text='Submit' bg={true} />
                </form>
            </div>

            <img src={cta2} alt="Cta2" className='md:block hidden' id='cta' />
        </div>
    );
}

export default Cta;