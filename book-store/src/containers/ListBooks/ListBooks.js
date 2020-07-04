import React, { Component } from 'react';
import Book from '../../components/Book/Book';
import './ListBooks.css';


class ListBooks extends Component {
    state = {
       books: {},
       listLength: 0
    }
    componentDidMount(){
        const books= JSON.parse(localStorage.getItem("books") || "{}");
        const listLength = JSON.parse(localStorage.getItem("listLength"));
        this.setState({books: books, listLength: listLength});
    }

    onEditHandler = (id) => {
        const queryParams = [];
        const currentBook = this.state.books[id];
       
        for(let i in currentBook){
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(currentBook[i]));
        }
    
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname:'/dashboard/editBook',
            search: '?'+queryString
        });
    } 

    onDeleteHandler = (id) => {
        const updatedBooks = this.state.books;
        delete updatedBooks[id] ;
        this.setState({books: updatedBooks})
        localStorage.setItem("books", JSON.stringify(updatedBooks));
    }

    render(){
        let books = <h2>Oh ho! No Books Yet</h2>;
        if(this.state.listLength) {
            books= Object.keys(this.state.books).map( book => 
            <Book key={this.state.books[book].id} title={this.state.books[book].title}
             author={this.state.books[book].author} date={this.state.books[book].date} 
             edit= {() => this.onEditHandler(this.state.books[book].id)}
             delete={() => this.onDeleteHandler(this.state.books[book].id)}/>)
        }

        return(
            <div className="listBooks">
                <ol>
                 <li className="col col-md-11 title"> 
                    <p className="col col-md-5">Title</p>   
                    <p className="col col-md-2">Author</p>
                    <p className="col col-md-2">Added on</p>
                    <button>Sort</button>
                 </li>
                 {books}
                </ol>
            </div>
        );
    }
}

export default ListBooks;