import React, { Component } from "react";
import * as BooksAPI from "../BooksAPI";
import { Link } from "react-router-dom";
import BooksList from "./BooksList";

class SearchBooks extends Component {
  state = {
    term: "",
    foundBooks: [],
  };

  handleTermChange = (e) => {
    this.setState({
      term: e.target.value,
    });
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

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.term !== this.state.term) {
      this.searchBook(this.state.term);
    }
  }
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
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
