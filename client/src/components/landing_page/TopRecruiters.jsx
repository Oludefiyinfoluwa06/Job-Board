import React from 'react';

import recruiterOne from '../../assets/recruiters/recruiter-1.svg';
import recruiterTwo from '../../assets/recruiters/recruiter-2.svg';
import recruiterThree from '../../assets/recruiters/recruiter-3.svg';
import recruiterFour from '../../assets/recruiters/recruiter-4.svg';
import recruiterFive from '../../assets/recruiters/recruiter-5.svg';
import recruiterSix from '../../assets/recruiters/recruiter-6.svg';

import { FaMapMarker, FaStar } from 'react-icons/fa';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const TopRecruiters = () => {
    useGSAP(() => {
        gsap.from('#tr-title', {
            scrollTrigger: {
                trigger: '#tr-title'
            },
            duration: 1,
            opacity: 0,
            y: 130,
            stagger: 0.3
        });

        gsap.from('#tr-box', {
            scrollTrigger: {
                trigger: '#tr-box',
            },
            duration: 1,
            opacity: 0,
            y: 130,
            scale: 0,
            stagger: 0.25
        });
    }, []);

    const recruiters = [
        {
            id: 1,
            title: 'Fireworks',
            rating: 4,
            location: 'Chicago, US',
            icon: recruiterOne
        },
        {
            id: 2,
            title: 'Dailymotion',
            rating: 4,
            location: 'Chicago, US',
            icon: recruiterTwo
        },
        {
            id: 3,
            title: 'Callaway Golf',
            rating: 4,
            location: 'Chicago, US',
            icon: recruiterThree
        },
        {
            id: 4,
            title: 'Baseball Saving',
            rating: 4,
            location: 'Chicago, US',
            icon: recruiterFour
        },
        {
            id: 5,
            title: 'Wanderu',
            rating: 4,
            location: 'Chicago, US',
            icon: recruiterFive
        },
        {
            id: 6,
            title: 'Ashford',
            rating: 4,
            location: 'Chicago, US',
            icon: recruiterSix
        },
    ];

    return (
        <>
            <div className='flex items-center justify-center gap-2 flex-col'>
                <h1 id='tr-title' className='capitalize sm:text-[40px] ss:text-[30px] text-[25px] font-bold text-darkBlue'>Top Recruiters</h1>
                <p id='tr-title' className='text-center'>Discover your next career move, freelance gig, or internship</p>
            </div>

            <div className='flex items-center justify-center flex-wrap gap-5 mt-6'>
                {recruiters.map(item => (
                    <div key={item.id} id='tr-box' className='md:w-[calc(100%/4-20px)] ss:w-[calc(100%/3-20px)] w-full h-[110px] border border-slate-300 rounded-md flex items-start justify-start flex-col gap-2 p-3 hover:shadow-md hover:border-darkBlue cursor-pointer'>
                        <div className='flex items-center justify-start gap-3'>
                            <img src={item.icon} alt={item.title} />
                            <div className=''>
                                <p>{item.title}</p>
                                <div className="flex items-center justify-start gap-1">
                                    <FaStar className='text-yellow-400' />
                                    <FaStar className='text-yellow-400' />
                                    <FaStar className='text-yellow-400' />
                                    <FaStar className='text-yellow-400' />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-start gap-2 text-slate-700">
                            <FaMapMarker />
                            <p>{item.location}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default TopRecruiters;