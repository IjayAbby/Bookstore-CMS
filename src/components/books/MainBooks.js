import React from 'react';
/* eslint import/extensions: "off" */
import AddBook from './AddBook';
/* eslint import/extensions: "warn" */
import BookList from './BookList';

const MainBooks = () => (
  <div className="mainbook__container">
    <BookList />
    <AddBook />
  </div>
);

export default MainBooks;
