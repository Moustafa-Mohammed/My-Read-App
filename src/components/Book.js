import React from "react";
import BookShelf from "./BookShelf";

const Book = ({ book, updateBookShelf, shelf }) => {
  const onSelcetChange = (event) => {
    updateBookShelf(book, event.target.value);
  };
  const imageURL = book.imageLinks || "";
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 192,
            backgroundImage: `url(${imageURL.thumbnail})`,
          }}
        />
        <BookShelf onSelcetChange={onSelcetChange} shelf={shelf} />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors || ""}</div>
    </div>
  );
};

export default Book;
