import React from 'react';
import { Link } from 'react-router-dom';

import about1 from '../../assets/about1.png';
import Button from '../Button';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    useGSAP(() => {
        gsap.from('#ab-right', {
            scrollTrigger: {
                trigger: '#ab-right'
            },
            duration: 1,
            opacity: 0,
            x: 200,
            stagger: 0.3
        });

        gsap.from('#ab-img', {
            scrollTrigger: {
                trigger: '#ab-img'
            },
            duration: 1,
            opacity: 0,
            x: -200,
        });
    }, []);

    return (
        <div className='flex justify-start items-center md:justify-center gap-10 my-[100px] md:flex-nowrap flex-wrap'>
            <div className='md:w-[500px] ss:w-[300px] w-[100%] h-[350px]' id='ab-img'>
                <img src={about1} alt='About' className='w-full h-full' />
            </div>
            <div>
                <h1 id='ab-right' className='capitalize sm:text-[50px] ss:text-[30px] text-[25px] font-bold text-darkBlue'>Know more <span className='text-normalBlue'>about</span> us</h1>
                <p id='ab-right' className='xs:text-[20px] text-[15px] mb-4'>Search all the open positions on the web. Get your own <br /> personalized salary estimate. Read reviews on over 600,000 companies worldwide. The right job is out there.</p>
                <div id="ab-right">
                    <Link to='/register'>
                        <Button text='Get started' bg={true} />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default About;