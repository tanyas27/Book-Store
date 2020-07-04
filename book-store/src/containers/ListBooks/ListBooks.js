import React, { Component } from 'react';
import Book from '../../components/Book/Book';
import './ListBooks.css';


class ListBooks extends Component {
    state = {
       books: {},
       size: 0
    }
    componentDidMount(){
        const books= JSON.parse(localStorage.getItem("books") || "{}");
        let size = Object.keys(books).length;
        this.setState({books: books, size: size});
    }

    onDeleteHandler = (title) => {
        const updatedBooks = this.state.books;
        delete updatedBooks[title] ;
        this.setState({books: updatedBooks})
        localStorage.setItem("books", JSON.stringify(updatedBooks));
    }

    render(){
        let books = "No Books Yet";
        if(this.state.size) {
            books= Object.keys(this.state.books).map( book => 
            <Book key={this.state.books[book].title} title={this.state.books[book].title}
             author={this.state.books[book].author} date={this.state.books[book].date} delete={() => this.onDeleteHandler(this.state.books[book].title)}/>)
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