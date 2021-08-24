import React from "react";
import Book from "./Book";

const BooksList = (props) => {
  const { foundBooks, updateBookShelf } = props;

  /* We map over all of the foundBooks, 
  compare the shelf of the books found with all books on Home page,
  if the book has a shelf, we assign it to the shelf of the book found,
  else we keep the shelf as "none"
  */

  const displayedBooks = foundBooks.map((foundBook) => {
    let shelf = "none";
    props.books.forEach((book) => {
      if (book.id === foundBook.id) {
        shelf = book.shelf;
      }
    });
    return (
      <li key={foundBook.id}>
        <Book
          book={foundBook}
          updateBookShelf={updateBookShelf}
          shelf={shelf}
        />
      </li>
    );
  });

  return (
    <div className="search-books-results">
      <ol className="books-grid">{displayedBooks}</ol>
    </div>
  );
};

export default BooksList;
