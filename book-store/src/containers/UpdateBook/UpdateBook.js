import React, { Component } from 'react';

class UpdateBook extends Component {
    state = {
        book:{
            id: null,
            title: "",
            author: "",
            date: null
        }
    };

    componentWillMount(){
        const query = new URLSearchParams(this.props.location.search);
        const book={};
        for(let param of query.entries()){
          book[param[0]] = param[1];
          console.log(param);
        }
        this.setState({book : book});
    }

    inputChangeHandler = (event, type) => {
        let newBook = { ...this.state.book }
        newBook[type] = event.target.value;
        this.setState({book: newBook});
    }
     
    handleFormSubmit = () => {
        const { books, book } = this.state;
        books[book.id] = book;
        localStorage.setItem("books", JSON.stringify(books));
        this.props.history.push('/dashboard/listBooks')
    };

    componentDidMount(){
        const books= JSON.parse(localStorage.getItem("books") || "{}" );
        this.setState({books: books});
    }

    render(){
        return(
            <div className="addBook">
              <h2>Edit Book Details</h2>
              <form onSubmit={this.handleFormSubmit}>
                <div className="form-group">
                <label htmlFor="title">Title of the Book</label>
                <input className="form-control" id="title" value={this.state.book.title} onChange={(event) => (this.inputChangeHandler(event,"title"))} type="text" placeholder="..."/>
                </div>
                <div className="form-group">
                <label htmlFor="author">Author</label>
                <input className="form-control" id="author" value={this.state.book.author} onChange={(event) => (this.inputChangeHandler(event,"author"))} type="text" placeholder="..." />
                </div>
                <button type="submit" className="btn btn-success">Update Book</button>
              </form>
            </div>
        );
    }
}

export default UpdateBook;