import React from 'react';
import logo from "../logo.svg";

function Header(){
    return (
        <div className='header-container'>
            <img className="rsm-logo" src={logo}/>
            <div className='header-title'>
                Coding Challenge By Christopher Regan
            </div>  
        </div>
        
    )
}
export default Header;