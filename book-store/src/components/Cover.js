import React from 'react';
import './Cover.css';

const cover = () => (
    <div className="cover">
        <h1>Welcome to our <span className="heading">BOOK STORE  </span><img alt ="logo" src={require ('../assets/images/book-store-icon.png')}/></h1>
        <a>HOP IN <img  id="enter" alt ="enter-icon" src={require ('../assets/images/enter.png')}/></a>
    </div>
);

export default cover;