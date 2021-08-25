import React, { Component } from "react";
import { DebounceInput } from "react-debounce-input";
import * as BooksAPI from "../BooksAPI";
import { Link } from "react-router-dom";
import BooksList from "./BooksList";

class SearchBooks extends Component {
  state = {
    term: "",
    foundBooks: [],
  };

  handleTermChange = (e) => {
    const newTerm = e.target.value;
    this.setState({
      term: newTerm,
    });
    this.searchBook(this.state.term);
  };

  searchBook = (term) => {
    if (term) {
      BooksAPI.search(term).then((foundBooks) => {
        if (!foundBooks.error) {
          this.setState(() => ({ foundBooks }));
        } else {
          this.setState(() => ({ foundBooks: [] }));
        }
      });
    } else {
      this.setState(() => ({ foundBooks: [] }));
    }
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <DebounceInput
              debounceTimeout={300}
              type="text"
              placeholder="Search by title or author"
              value={this.state.term}
              onChange={this.handleTermChange}
            />
          </div>
        </div>
        <BooksList
          foundBooks={this.state.foundBooks}
          books={this.props.books}
          updateBookShelf={this.props.updateBookShelf}
        />
      </div>
    );
  }
}

export default SearchBooks;
