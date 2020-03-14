import React from 'react';
import './SingleProfile.css';

const SingleProfile = (props) => {
    const { id, img, name, job, salary, email } = props.profile;
    return (
        <div>
            <div className="profile-header">
                <h6 className="id">{id} </h6>
                <h6><img src={img} alt="" className="photoStyle rounded-circle mx-auto d-block" /></h6>
                <h6 className="nameStyle">{name}</h6>
                <h6>{job}</h6>
                <h6>${Math.round(salary)}</h6>
                <h6>{email}</h6>
            </div>
            <div className="profile-btn row justify-content-center">
                <button className="btn-design text-center">View Profile</button>
                <button className="btn-design text-center ml-5">Hire For Project</button>
            </div>
        </div>
    );
};

export default SingleProfile;