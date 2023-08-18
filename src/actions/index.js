const booksLoaded = (newBooks) => {
  return {
    type: "FETCH_BOOKS_SUCCESS",
    payload: newBooks,
  };
};

const booksRequested = () => {
  return {
    type: "FETCH_BOOKS_REQUEST",
  };
};

const booksError = (error) => {
  return {
    type: "FETCH_BOOKS_FAILURE",
    payload: error,
  };
};

export const bookAddedToCard = (bookId) => {
  return {
    type: "BOOK_ADDED_TO_CARD",
    payload: bookId,
  };
};

export const bookDeletedFromCard = (bookId) => {
  return {
    type: "BOOK_DELETED_FROM_CARD",
    payload: bookId,
  };
};

export const allBookDeleted = (bookId) => {
  return {
    type: "ALL_BOOK_DELETED",
    payload: bookId,
  };
};

const fetchBooks = (dispatch, bookstoreService) => () => {
  dispatch(booksRequested());
  bookstoreService
    .getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err) => dispatch(booksError(err)));
};

export { fetchBooks };
