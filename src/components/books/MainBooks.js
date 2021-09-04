import React from 'react';
/* eslint import/extensions: "off" */
import AddBook from './AddBook';
import BookList from './BookList';

const MainBooks = () => (
  <div className="mainbook__container">
    <BookList />
    <AddBook />
  </div>
);

export default MainBooks;
