import React from 'react';
import {NavLink} from 'react-router-dom';  

const Navbar = () => {
    return (
        <>
        <NavLink exact activeClassName='active_class' to='/'> About </NavLink>
        <NavLink exact activeClassName='active_class' to="/contact"> Contact </NavLink>

        <br>

        </br>
           <a href="/">About </a>
           <a href="/contact">Contact</a>
        </>
    )
};

export default Navbar;