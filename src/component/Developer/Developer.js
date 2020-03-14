import React, { useState } from 'react';
import './Developer.css';
import data from '../../data/data.json';
import './Developer.css';
import SingleProfile from '../SingleProfile/SingleProfile';


const Developer = () => {
    const [profile, setProfile] = useState(data);

    return (
        <div className="main-section">
            <div className="dash-board">
                <h5 className="status">Selected : {20}</h5>
                <h5 className="status">Total Salary : ${25423}</h5>

            </div>

            <div className="body-container ">
                <div className="content-header">
                    <h6 className="id">ID</h6>
                    <h6>Photo</h6>
                    <h6>Full Name</h6>
                    <h6>Profession</h6>
                    <h6>Salary</h6>
                    <h6>E-mail</h6>
                </div>


                <div className="overflow-control overflow-auto">
                    <div className="main-content">
                        {
                            profile.map(profile => <SingleProfile profile={profile}></SingleProfile>)
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Developer;