import React from 'react';
import Banner from './Banner/Banner';

import Infocards from './Infocards/Infocards';
import Services from './Services/Services';


const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <Infocards></Infocards>
            <Services></Services>
        </div>
    );
};

export default Home;