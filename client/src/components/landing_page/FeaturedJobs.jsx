import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';
import { FaBriefcase, FaClock } from 'react-icons/fa';
import Button from '../Button';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const FeaturedJobs = () => {
    useGSAP(() => {
        gsap.from('#fj-title', {
            scrollTrigger: {
                trigger: '#fj-title'
            },
            duration: 1,
            opacity: 0,
            y: 130,
            stagger: 0.3
        });

        gsap.from('#fj-box', {
            scrollTrigger: {
                trigger: '#fj-box',
            },
            delay: 1,
            duration: 1,
            opacity: 0,
            y: 130,
            stagger: 0.3
        });
    }, []);

    const featuredJobs = [
        {
            id: 1,
            title: 'UI/UX Designer',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur',
            skills: ['Figma', 'PSD'],
            date: '22/3/2024',
            type: 'Full time',
            link: '/'
        },
        {
            id: 2,
            title: 'Graphics Designer',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur',
            skills: ['Adobe XD', 'PSD', 'CorelDraw'],
            date: '22/3/2024',
            type: 'Full time',
            link: '/'
        },
        {
            id: 3,
            title: 'Backend Developer',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur',
            skills: ['Node JS', 'Express JS'],
            date: '22/3/2024',
            type: 'Full time',
            link: '/'
        },
        {
            id: 4,
            title: 'Frontend Developer',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur',
            skills: ['React JS', 'React Native'],
            date: '22/3/2024',
            type: 'Full time',
            link: '/'
        },
        {
            id: 5,
            title: 'Full-stack Developer',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur',
            skills: ['MERN', 'MEAN'],
            date: '22/3/2024',
            type: 'Full time',
            link: '/'
        },
        {
            id: 6,
            title: 'Flutter Developer',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur',
            skills: ['Flutter', 'Firebase'],
            date: '22/3/2024',
            type: 'Full time',
            link: '/'
        },
    ];

    return (
        <div className='my-[30px]'>
            <div className='flex items-center justify-center gap-2 flex-col'>
                <h1 id='fj-title' className='capitalize sm:text-[40px] ss:text-[30px] text-[25px] font-bold text-darkBlue'>Featured Jobs</h1>
                <p id='fj-title' className='text-center'>See a list of some featured jobs and apply easily</p>
            </div>

            <div className='flex items-center justify-center flex-wrap gap-5 mt-4'>
                {featuredJobs.map(item => (
                    <div key={item.id} id='fj-box' className='relative md:w-[calc(100%/3-20px)] ss:w-[calc(100%/2-20px)] w-full h-[300px] p-4 border border-slate-300 rounded-md'>
                        <h3 className='font-bold text-darkBlue text-[23px]'>{item.title}</h3>
                        <div className='flex items-center justify-start gap-4 text-slate-400 text-[13px] my-[7px]'>
                            <div className='flex items-center justify-start gap-2'>
                                <FaBriefcase />
                                <p>{item.type}</p>
                            </div>
                            <div className='flex items-center justify-start gap-2'>
                                <FaClock />
                                <p>{item.date}</p>
                            </div>
                        </div>
                        <p className='text-[16px]'>{item.desc}</p>
                        <div className='flex items-center justify-start gap-3 mt-3'>
                            {item.skills.map((skill, index) => (
                                <p key={index} className='px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-[14px]'>{skill}</p>
                            ))}
                        </div>
                        <Link to={item.link} className='absolute bottom-[20px] right-[20px]'>
                            <Button text='Apply now' bg={true} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FeaturedJobs;