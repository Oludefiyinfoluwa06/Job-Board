import React from 'react';
import Hero from '../components/landing_page/Hero';
import Categories from '../components/landing_page/Categories';
import FeaturedJobs from '../components/landing_page/FeaturedJobs';
import About from '../components/landing_page/About';
import TopRecruiters from '../components/landing_page/TopRecruiters';
import Cta from '../components/landing_page/Cta';
import Footer from '../components/landing_page/Footer';

const LandingPage = () => {
    return (
        <div className='font-poppins'>
            <div className='bg-lightBlue xs:px-10 px-5 py-4'>
                <Hero />
            </div>
            <div className="xs:px-10 px-5 py-4">
                <Categories />
                <FeaturedJobs />
                <About />
                <TopRecruiters />
                <Cta />
                <Footer />
            </div>
        </div>
    );
}

export default LandingPage;