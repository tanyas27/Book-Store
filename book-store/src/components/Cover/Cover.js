import React from 'react';
import './Cover.css';
import { NavLink } from 'react-router-dom';

const cover = () => (
    <div className="cover">
        <h1>Welcome to our <span className="heading">BOOK STORE  </span><img alt ="logo" src={require ('../../assets/images/book-store-icon.png')}/></h1>
        <NavLink to="/dashboard" >HOP IN <img  id="enter" alt ="enter-icon" src={require ('../../assets/images/enter.png')}/></NavLink>
    </div>
);

export default cover;