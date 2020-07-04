import React from 'react';
import './Book.css';


const book = (props) => (
    <li className="col col-md-11 book">
      <p className="col col-md-5">{props.title}</p>   
      <p className="col col-md-2">{props.author}</p>
      <p className="col col-md-2">{props.date}</p>
      <a className="btn">Edit</a>
      <button className="btn btn-Light" onClick={props.delete}>Delete</button>
    </li>
);

export default book;