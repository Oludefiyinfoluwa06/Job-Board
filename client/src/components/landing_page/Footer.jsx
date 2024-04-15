import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='flex items-center justify-between text-[14px] py-5'>
            <p>Copyright &copy; {new Date().getFullYear()}, All Rights Reserved.</p>
            <div className='flex items-center justify-end gap-3'>
                <Link to='/'>Privacy Policy</Link>
                <Link to='/'>Terms &amp; condition</Link>
                <Link to='/'>Security</Link>
            </div>
        </footer>
    );
}

export default Footer;