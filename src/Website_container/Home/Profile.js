import React from 'react'
import Typical from 'react-typical'
import './Profile.css'

export default function Profile(){
    return (
        <div className='profile_container'>
                    <div className='fixed'>
                            <span className='primary-text'></span>
                            {" "}
                            Welcome to <span className='highlighted-text'><br></br></span>
                        </div>
                <div className='scroll'>
                    <h1>
                        {" "}
                        <Typical 
                        wrapper='b'
                        steps={[
                            "Team Aveon Racing!",
                            1000,
                            "Team Aveon Racing!",
                            1000,
                            ]}
                            loop={Infinity}
                        />
                    </h1>
                    <span className='profile-role-tagline'>
                        If any tagline/agenda it will go here
                    </span>
                </div>
                <div id="about">ABOUT US</div>
                </div>
    )
}
