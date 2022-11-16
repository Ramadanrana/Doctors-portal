import React from 'react';

const Infocard = ({card}) => {
    const {names, description, icon,bgclass} = card;
    return (
        <div className={`card p-6 text-white card-side shadow-xl ${bgclass}`}>
            <figure><img src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{names}</h2>
                <p>{description}</p>
                
            </div>
        </div>
    );
};

export default Infocard;