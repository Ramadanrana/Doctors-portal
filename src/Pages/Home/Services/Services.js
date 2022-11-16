import React from 'react';
import flouride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import white from '../../../assets/images/whitening.png';
import Service from '../Service/Service';

const Services = () => {
    const services =[
        {
            id:1,
            title: "Flouride Treatment",
            img: flouride,
            detail:'Our services will help you prevent your flouride,cavity and helps you increase your whitening'
        },
        {
            id:2,
            title: "Cavity Filling",
            img: cavity,
            detail:'Our services will help you prevent your flouride,cavity and helps you increase your whitening'
        },
        {
            id:3,
            title: "Teeth Whitening",
            img: white,
            detail:'Our services will help you prevent your flouride,cavity and helps you increase your whitening'
        },
    ]
    return (
        <div >
            <div className='text-center mt-16'>
            <h1 className='text-primary text-3xl font-bolder mb-4'>Our Services</h1>
            <h1 className='text-5xl font-bolder mb-8'>Services We Provide</h1>
            </div>
            <div className='grid gap-4 lg:ml-24 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mb-16'>
                {
                    services.map(service => <Service service={service}></Service>)
                }
            </div>
        </div>
        
    );
};

export default Services;