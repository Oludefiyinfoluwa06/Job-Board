import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    useGSAP(() => {
        gsap.from('#footer', {
            scrollTrigger: {
                trigger: '#footer',
            },
            duration: 1,
            opacity: 0,
            yPercent: 100,
            stagger: 0.3
        })
    }, []);

    return (
        <footer className='flex items-center justify-between text-[14px] py-5 border-t-2'>
            <p id="footer">Copyright &copy; {new Date().getFullYear()}, All Rights Reserved.</p>
            <div className='flex items-center justify-end gap-3'>
                <Link id="footer" to='/'>Privacy Policy</Link>
                <Link id="footer" to='/'>Terms &amp; condition</Link>
                <Link id="footer" to='/'>Security</Link>
            </div>
        </footer>
    );
}

export default Footer;