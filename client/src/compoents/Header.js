import React from 'react';
import SignInBtn from './SignInBtn.js';
import SignUpBtn from './SignUpBtn.js';
import '../css/homePage.css'; 
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className="header">







            <span>
                <NavLink to="/" className="trimpa">Tripma</NavLink>
            </span>


            <span className="topnav">
                <NavLink to="/flight" id="nav">Flights</NavLink>
                <NavLink to="/hotels" id="nav">Hotels</NavLink>
                <NavLink to="/" id="nav">Packages</NavLink>
                <SignInBtn/>
                <SignUpBtn />
            </span>
            
        </div>
    );
}

export default Header;