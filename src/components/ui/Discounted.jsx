import React from "react";
import { books } from "/Users/mhaigh/library-react-turorial/src/data"
import Book from "/Users/mhaigh/library-react-turorial/src/components/ui/Book.jsx";

const Discounted = () => {
  return (
    <section id="recent">
      <div className="container">
        <div className="row">
          <div className="section__title">
            Discount <span className="purple">Books</span>
          </div>
          <div className="books">
            {books.map((book) => (
              <Book book={book} key={book.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discounted;
