import React from 'react';

const Options = ({ option }) => {
    const { name, slots } = option;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body ">
                <h2 className="card-title text-primary text-3xl">{name}</h2>
                <p>{slots.length>0? slots[0]:"try another day"}</p>
                <p>{slots.length} {slots.length>1? 'spaces':"space" } Available</p>
                <div className="card-actions">
                    <button className="btn btn-primary text-white">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Options;