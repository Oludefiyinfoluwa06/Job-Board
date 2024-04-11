import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

import software from '../../assets/icons/software.svg';
import contentWriter from '../../assets/icons/content-writer.svg';
import customerService from '../../assets/icons/customer-service.svg';
import finance from '../../assets/icons/finance.svg';
import management from '../../assets/icons/management.svg';
import stethoscope from '../../assets/icons/stethoscope.png';
import research from '../../assets/icons/research.svg';
import retail from '../../assets/icons/retail.svg';
import sale from '../../assets/icons/sale.svg';

gsap.registerPlugin(ScrollTrigger);

const Categories = () => {
    useGSAP(() => {
        gsap.from('#cat-title', {
            scrollTrigger: {
                trigger: '#cat-title'
            },
            duration: 1,
            opacity: 0,
            y: 130,
            stagger: 0.3
        });

        gsap.from('#cat-box', {
            scrollTrigger: {
                trigger: '#cat-box',
            },
            duration: 1,
            opacity: 0,
            y: 130,
            scale: 0,
            stagger: 0.25
        });
    }, []);

    const categories = [
        {
            id: 1,
            title: 'Software',
            icon: software
        },
        {
            id: 2,
            title: 'Content Writer',
            icon: contentWriter
        },
        {
            id: 3,
            title: 'Human Resource',
            icon: customerService
        },
        {
            id: 4,
            title: 'Banking & Finance',
            icon: finance
        },
        {
            id: 5,
            title: 'Management',
            icon: management
        },
        {
            id: 6,
            title: 'Healthcare',
            icon: stethoscope
        },
        {
            id: 7,
            title: 'Market Research',
            icon: research
        },
        {
            id: 8,
            title: 'Retail & product',
            icon: retail
        },
        {
            id: 9,
            title: 'Sales & Marketing',
            icon: sale
        },
    ];

    return (
        <>
            <div className='flex items-center justify-center gap-2 flex-col'>
                <h1 id='cat-title' className='capitalize sm:text-[40px] ss:text-[30px] text-[25px] font-bold text-darkBlue'>Browse by category</h1>
                <p id='cat-title' className='text-center'>Find the job that's perfect for you. about 800+ new jobs everyday</p>
            </div>
            
            <div className='flex items-center justify-center flex-wrap gap-5 mt-6'>
                {categories.map(item => (
                    <div key={item.id} id='cat-box' className='md:w-[calc(100%/4-20px)] ss:w-[calc(100%/3-20px)] w-full h-[80px] border border-slate-300 rounded-md flex items-center justify-start gap-2 p-3 hover:shadow-md hover:border-darkBlue cursor-pointer'>
                        <img src={item.icon} alt={item.title} />
                        <p>{item.title}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Categories;