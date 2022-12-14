import React from 'react';
import Banner from './Banner/Banner';

import Infocards from './Infocards/Infocards';
import Makeappointment from './Makeappointment/Makeappointment';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';
import Treatment from './Treatment/Treatment';


const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <Infocards></Infocards>
            <Services></Services>
            <Treatment></Treatment>
            <Makeappointment></Makeappointment>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;