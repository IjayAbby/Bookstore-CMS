import React from 'react';
import AddBook from './AddBook.js';
import BookList from './BookList';

const MainBooks = () => (
  <div className="mainbook__container">
    <BookList />
    <AddBook />
  </div>
);

export default MainBooks;
