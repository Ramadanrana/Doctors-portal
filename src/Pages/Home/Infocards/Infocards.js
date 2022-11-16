import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import Infocard from '../Infocard/Infocard';

const Infocards = () => {
    const cardData = [
        {
            id:1,
            names:"Opening Hours",
            description:"open 9.00am to 5.00 PM everyday",
            icon:clock,
            bgclass:"bg-primary"
        },
        {
            id:2,
            names:"Visit our location",
            description:"open 9.00am to 5.00 PM everyday",
            icon:marker,
            bgclass:"bg-primary"
        },
        {
            id:3,
            names:"Contact us",
            description:"open 9.00am to 5.00 PM everyday",
            icon:phone,
            bgclass:"bg-primary"
        },
    ]
    return (
        <div className='grid mt-16 my-4 mx-4 gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
            {
                cardData.map(card => <Infocard card={card}></Infocard>)
            }
        </div>
    );
};

export default Infocards;