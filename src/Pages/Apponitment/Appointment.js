import React, { useEffect, useState } from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import Options from './Options';

const Appointment = () => {
    const [appoption, setAppoption]= useState([]);

    useEffect(()=>{
        fetch('Services.json')
        .then(res => res.json())
        .then(data => setAppoption(data))
    },[])
    const [selectedDate,setSelectedDate] = useState(new Date());

    return (
        <div className=" my-24">
            <div className="hero-content flex-col ml-48 lg:flex-row-reverse">
                <img src={chair} alt='' className="w-1/2 rounded-lg shadow-2xl ml-16" />
                <div>
                    <DayPicker
                     mode='single'
                     selected={selectedDate}
                     onSelect={setSelectedDate}
                    />
                    <p className='text-secondary font-bolder text-xl'>You have Selected {format(selectedDate,'PP')}</p>
                </div>
                
            </div>
            <div className='grid ml-24 gap-6 lg:grid-cols-3 mt-24'>
                    {
                        appoption.map(option => <Options option={option}></Options>)
                    }
            </div>
        </div>
    );
};

export default Appointment;