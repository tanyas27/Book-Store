import React from 'react';
import ListBooks from '../../containers/ListBooks/ListBooks';
import AddBook from '../AddBook/AddBook';
import UpdateBook from '../../containers/UpdateBook/UpdateBook';
import {NavLink, Route} from 'react-router-dom';
import './Dashboard.css';


const dashboard = () => (
  <div className="dashboard">
  <header> <h1>Book Store <img alt ="logo" src={require ('../../assets/images/book-store-icon.png')}/></h1></header>
  <br/>
  <div className="container-fluid">
    <div className="row content">
    <div className="col-sm-2 sidenav">
      <h2>Dashboard</h2>
      <ul className="nav nav-pills nav-stacked">
        <li className="btn btn-Light"><NavLink to="/dashboard/addBook">Add New Book</NavLink></li>
        <li className="btn btn-Light"><a href="/dashboard/listBooks">List Books</a></li>
      </ul><br/>
    </div>

    <div className="col-sm-10">
      <Route path="/dashboard/addBook" component={AddBook}/>
      <Route path="/dashboard/editBook" component={UpdateBook}/>
      <Route path="/dashboard/listBooks" component={ListBooks}/>
    </div>
  </div>
</div>
<footer className="container-fluid">
  <p>Copyright &copy; Tanya</p>
</footer>
</div>
);

export default dashboard;