import React, { Component } from 'react';
import './AddBook.css';

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];

class AddBook extends Component {
    state = {
        books: null,
        book:{
            id: null,
            title: "",
            author: "",
            date: null
        },
        listLength : 0
    };

    inputChangeHandler = (event, type) => {
        let newBook = { ...this.state.book }
        newBook[type] = event.target.value;
        this.setState({book: newBook});
    }
     
    handleFormSubmit = () => {
        const { books, book } = this.state;
        let today = new Date();
        var dd = today.getDate(); 
        var mm = today.getMonth();  
        var yyyy = today.getFullYear(); 
        book.date = dd + " " + monthNames[mm] + " " + yyyy; 
        let listL =  this.state.listLength +1;
        this.setState({listLength: listL});
        book.id = listL;
        books.push(book);
        localStorage.setItem("books", JSON.stringify(books));
        localStorage.setItem("listLength", JSON.stringify(listL));
    };

    componentDidMount(){
        const books= JSON.parse(localStorage.getItem("books") || "[]" );
        const listLength = JSON.parse(localStorage.getItem("listLength") || "0");
        this.setState({books: books, listLength: +listLength});
    }

    render(){
        return(
            <div className="addBook">
              <h2>Add New Book</h2>
              <br/>
              <form onSubmit={this.handleFormSubmit}>
                <div className="form-group">
                <label htmlFor="title">Title of the Book</label>
                <input className="form-control" id="title" onChange={(event) => (this.inputChangeHandler(event,"title"))} type="text" placeholder="e.g Harry Potter and the Deathly Hallows"required/>
                </div>
                <div className="form-group">
                <label htmlFor="author">Author</label>
                <input className="form-control" id="author" onChange={(event) => (this.inputChangeHandler(event,"author"))} type="text" placeholder="e.g J K Rowling" required/>
                </div>
                <button type="submit" className="btn btn-success">Add Book</button>
              </form>
            </div>
        );
    }
}

export default AddBook;