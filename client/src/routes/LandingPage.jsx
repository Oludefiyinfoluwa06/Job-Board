import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Categories from '../components/Categories';

const LandingPage = () => {
    return (
        <div className='font-poppins'>
            <div className='bg-lightBlue xs:px-10 px-5 py-4'>
                <Navbar />
                <Hero />
            </div>
            <div className="xs:px-10 px-5 py-4">
                <Categories />
            </div>
        </div>
    );
}

export default LandingPage;