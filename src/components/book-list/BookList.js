import React, { Component } from "react";
import BookListItem from "../book-list-item";
import { connect } from "react-redux";
import withWrapped from "../hoc/Wrapper";
import { bookAddedToCard, fetchBooks } from "../../actions";
import "./BookList.css";
import Spinner from "../spinner/Spinner";
import ErrorIndicator from "../error-indicator/ErrorIndicator";

class BookList extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error, onAddedToCard } = this.props;
    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }
    return (
      <ul className="book-list">
        {books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem
                book={book}
                onAddedToCard={() => onAddedToCard(book.id)}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = ({ books, loading, error, onAddedToCard }) => {
  return { books, loading, error, onAddedToCard };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(dispatch, bookstoreService),
    onAddedToCard: (id) => {
      dispatch(bookAddedToCard(id));
    },
  };
};

export default withWrapped()(
  connect(mapStateToProps, mapDispatchToProps)(BookList)
);
