import React from 'react';
import ListBooks from '../../containers/ListBooks/ListBooks';
import AddBook from '../AddBook/AddBook';
import {NavLink, Route} from 'react-router-dom';
import './Dashboard.css';


const dashboard = () => (
  <div className="dasboard">
  <div className="container-fluid">
    <h1>Book Home</h1>
    <hr/>
    <div className="row content">
    <div className="col-sm-2 sidenav">
      <h3>Dashboard</h3>
      <ul className="nav nav-pills nav-stacked">
        <li className="btn btn-Light"><NavLink to="/dashboard/addBook">Add New Book</NavLink></li>
        <li className="btn btn-Light"><NavLink to="/dashboard/listBooks">List Books</NavLink></li>
      </ul><br/>
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Search Store.."/>
        <span className="input-group-btn">
          <button className="btn btn-success" type="button">
            Go
          </button>
        </span>
      </div>
    </div>

    <div className="col-sm-10">
      <Route path="/dashboard/addBook" component={AddBook}/>
      <Route path="/dashboard/listBooks" component={ListBooks}/>
    </div>
  </div>
</div>
<footer className="container-fluid">
  <p>Footer Text</p>
</footer>
</div>
);

export default dashboard;