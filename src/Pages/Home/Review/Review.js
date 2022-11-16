import React from 'react';

const Review = ({revie}) => {
    const {name,comment,location,img} = revie;
    return (
        <div className="card  shadow-xl">
  <div className="card-body">
    <h2 className="card-title text-3xl font-bolder">{name}</h2>
    <p>{comment}</p>
    <img className='w-1/2' src={img} alt="" />
    <h1 className='text-xl font-bold'>{location}</h1>
    
  </div>
</div>
    );
};

export default Review;