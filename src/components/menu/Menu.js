import React from 'react';
import './menu.css';
import { Link } from 'react-router-dom';

const toggleMenuClasses = () => {
    let hamburgerIcon = document.getElementById('burger');
    hamburgerIcon.classList.toggle('is-active');
    let mobileMenu = document.getElementById('menu-container');
    mobileMenu.classList.toggle('opened');
} 
const Menu = () => {
    return(
        <div>
            <div className="burger" id="burger" onClick={toggleMenuClasses}>
                
                <div className="lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
            <div className="menu-container" id="menu-container">
            <Link to="/logout">Logout</Link>
                <div className="menu-title">Breed Information</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ad qui dolorem eos neque deleniti necessitatibus ex. Porro sint hic corrupti odio aliquid, quisquam officia ad excepturi, fugit, non illum!
            </div>
        </div>
    );
}

export default Menu;