import React from 'react';
import Navbar from '../components/landing_page/Navbar';
import Hero from '../components/landing_page/Hero';
import Categories from '../components/landing_page/Categories';
import FeaturedJobs from '../components/landing_page/FeaturedJobs';

const LandingPage = () => {
    return (
        <div className='font-poppins'>
            <div className='bg-lightBlue xs:px-10 px-5 py-4'>
                <Navbar />
                <Hero />
            </div>
            <div className="xs:px-10 px-5 py-4">
                <Categories />
                <FeaturedJobs />
            </div>
        </div>
    );
}

export default LandingPage;