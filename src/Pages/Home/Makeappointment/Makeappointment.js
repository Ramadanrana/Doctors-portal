import React from 'react';
import doctor from '../../../assets/images/doctor-small.png';
import appointment from '../../../assets/images/appointment.png'

const Makeappointment = () => {
    return (
        <section className='mt-48'
        style={{
            background:`url(${appointment})`
        }}
        >
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row ">
                    <img className='w-1/2 -mt-32' src={doctor} alt=''/>
                    <div>
                        <h1 className='text-3xl text-primary'>Appointment</h1>
                        <h1 className="text-5xl text-white font-bold">Make an Appointment Today</h1>
                        <p className="py-6 text-white">You should make an appointment by calling or by email. Do not try to make appointments by text, unless you are simply asking a good friend if they would like to have lunch. When making an appointment you should give the person your name and the reason for wanting an appointment.You can set an appointment by the calender.You can choose only one time in a day</p>
                        <button className="btn btn-primary text-white">Get Started</button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Makeappointment;