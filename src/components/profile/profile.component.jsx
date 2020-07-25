import React from 'react';
import bg  from '../../media/1.jpg';
import profile  from '../../media/lee.jpg';

export default (props) => {
    return(
        <div className="container">
            <div className="col-md-12">
                <div className="card profile-card-1">
                    <img src={bg} alt="Profile Sample" className="background" />
                    <img src={profile} alt="Profile Image" className="profile" />
                    <div classname="card-content">
                        <h2>Mafanga Lolito<small>Developer</small></h2>
                    </div>

                </div>
            </div>
        </div>
    )
}