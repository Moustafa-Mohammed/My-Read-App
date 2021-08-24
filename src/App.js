import React from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import SearchBooks from "./components/SearchBooks";
import Home from "./components/Home";

import "./App.css";

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  renderAllBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState(() => {
        return {
          books,
        };
      });
    });
  };

  componentDidMount() {
    this.renderAllBooks();
  }

  updateBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    this.renderAllBooks();
  };

  

  render() {
    return (
      <div className="app">
        <Route
          path="/search"
          render={() => (
            <SearchBooks
              books={this.state.books}
              updateBookShelf={this.updateBookShelf}
            />
          )}
        />

        <Route
          path="/"
          exact
          render={() => (
            <Home
              books={this.state.books}
              updateBookShelf={this.updateBookShelf}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
