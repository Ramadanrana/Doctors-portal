import React from 'react';
import qoute from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from '../Review/Review';

const Testimonial = () => {
    const reviews =[
        {
            id:1,
            name:"Winson Cary",
            comment:"Trusted Dental care, Dr.G is very caring and friendly Doctor. He and all his staff are passionate and very knowledgeable. Their office is very clean. I highly recommend this dental care!",
            location:"California",
            img:people1
        },
        {
            id:2,
            name:"Rachel Mcgill",
            comment:"The staff was very friendly and welcoming. They cleaned my teeth really well and were kind as well as professional. Will definitely continue to come regularly.",
            location:"Washigton DC",
            img:people2
        },
        {
            id:3,
            name:"Lyndsey Williams",
            comment:" My experience at Trusted Dental Care was great! Dr. G explained everything in great detail and the hygienist, Marian, did a wonderful job cleanjng my teeth",
            location:"Florida",
            img:people3
        },
    ]
    return (
        <div className='my-16 ml-36'>
            <div className='flex justify-between'>
                 <div className='text-center ml-96'>
                 <h1 className='text-primary text-3xl font-bold'>Testimonial</h1>
                 <h1 className=' text-5xl font-bold'>What our patients Say</h1>
                 </div>
                 <figure>
                <img className='w-48' src={qoute} alt="" />
            </figure>
            </div>
            
            <div className='grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                  {
                    reviews.map(revie=> <Review revie={revie}></Review>)
                  }
            </div>
        </div>
    );
};

export default Testimonial;