import React from "react";
import PropTypes from "prop-types";

const BookShelf = ({ onSelcetChange, shelf }) => {
  return (
    <div className="book-shelf-changer">
      <select onChange={onSelcetChange} value={shelf}>
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

BookShelf.propTypes = {
  onSelcetChange: PropTypes.func.isRequired,
  shelf: PropTypes.string.isRequired,
};

export default BookShelf;
