import React from 'react';
import treatment from '../../../assets/images/treatment.png'

const Treatment = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl lg:ml-24 mb-16">
            <figure><img className='' src={treatment} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title text-5xl font-bolder">Exceptional Dental <br/> Care On Your Terms</h2>
                <p className='text-xl'>Dentistry, also known as dental medicine and oral medicine, is the branch of medicine focused <br/> on the teeth, gums, and mouth. It consists of the study, diagnosis,<br/> prevention, management, and treatment of diseases, disorders, and conditions of the mouth, most commonly focused on dentition as well as the oral mucosa The history of dentistry is almost as ancient as the history of <br/> humanity and civilization with the earliest evidence dating from 7000 BC to 5500 BC.[3] Dentistry is thought to have been the first specialization <br/>in medicine which have gone on to develop its own accredited degree with its own specializations.<br/> Dentistry is often also understood to subsume the now largely defunct medical specialty of stomatology (the study of the mouth and its disorders and diseases) for which reason the two terms are used interchangeably in certain regions</p>
                <div className="card-actions">
                    <button className="btn btn-primary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Treatment;