import React, { Component } from 'react';
import Book from '../../components/Book/Book';
import './ListBooks.css';


class ListBooks extends Component {
    state = {
      books: null,
      listLength: 0,
      dropdownOpen: false,
      searchFor: ""
    }

    toggleOpen = () => this.setState({ dropdownOpen: !this.state.dropdownOpen });

    componentDidMount(){
        const books= JSON.parse(localStorage.getItem("books") || "[]");
        const listLength = JSON.parse(localStorage.getItem("listLength"));
        this.setState({books: books, listLength: listLength});
    }

    onEditHandler = (id) => {
        const queryParams = [];
        const currentBook = this.state.books.find(item => item.id === id);
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
        const updatedBooks = this.state.books.filter(i => i.id !== id);
        this.setState({books: updatedBooks})
        localStorage.setItem("books", JSON.stringify(updatedBooks));
    }

    searchHandler = () => {
      const keyword = this.state.searchFor;
      const searchedBooks = this.state.books.filter((book) => 
      (book.title.toLowerCase() === keyword.toLowerCase()) || (book.author.toLowerCase() === keyword.toLowerCase()) );
      this.setState({books: searchedBooks});
    }

    sortHandler = (by) => {
       let sortedBooks = [...this.state.books];
       sortedBooks.sort((a,b) => ((a[by].toLowerCase() > b[by].toLowerCase() ? 1 : -1)));
       this.setState({books: sortedBooks});
    }

    render(){
        const menuClass = `dropdown-menu${this.state.dropdownOpen ? " show" : ""}`;
        let books = <h2>Oh Snap! No Books Yet</h2>;
        if(this.state.books) {
            books= (this.state.books).map( book => 
            <Book key={book.id} title={book.title}
             author={book.author} date={book.date} 
             edit= {() => this.onEditHandler(book.id)}
             delete={() => this.onDeleteHandler(book.id)}/>)
        }

        return(
            <div className="listBooks">
                <ol>
                 <li className="col col-md-11 title"> 
                    <p className="col col-md-5">Title</p>   
                    <p className="col col-md-2">Author</p>
                    <p className="col col-md-2">Added on</p>
                    <div className="dropdown" onClick={this.toggleOpen}>
                    <button
                      className="btn btn-light dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true">
                      Sort By
                    </button>
                    <div className={menuClass} aria-labelledby="dropdownMenuButton">
                      <div className="dropdown-item" onClick={() => this.sortHandler("title")}>
                        Title
                      </div>
                      <div className="dropdown-item" onClick={() => this.sortHandler("author")}>
                        Author
                      </div>
                      <div className="dropdown-item" onClick={() => this.sortHandler("date")}>
                        Date
                      </div>
                    </div>
                  </div>
                  &nbsp;
                  <div className="input-group">
                  <input type="text" className="form-control" 
                  placeholder="Search..." onChange={(event) => {this.setState({searchFor: event.target.value})}}/>
                  <span className="input-group-btn">
                    <button className="btn btn-success" type="button" onClick={this.searchHandler}>
                      Go
                    </button>
                  </span>
                  </div>
                 </li>
                 {books}
                </ol>
            </div>
        );
    }
}

export default ListBooks;