const initialState = {
  books: [],
  loading: true,
  error: null,
  cardData: [],
  orderTotal: 12000,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BOOKS_REQUEST":
      return {
        ...state,
        books: [],
        loading: true,
        error: null,
      };

    case "FETCH_BOOKS_SUCCESS":
      return { ...state, books: action.payload, loading: false, error: null };

    case "FETCH_BOOKS_FAILURE":
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload,
      };

    case "BOOK_ADDED_TO_CARD":
      const bookId = action.payload;
      const currentItem = state.books.find((book) => book.id === bookId);
      const itemIndex = state.cardData.findIndex(({ id }) => id === bookId);
      const itemToDelete = state.cardData[itemIndex];

      let toDeleteItem;

      if (itemToDelete) {
        toDeleteItem = {
          ...itemToDelete,
          count: itemToDelete.count + 1,
          total: itemToDelete.total + currentItem.price,
        };
      } else {
        toDeleteItem = {
          id: currentItem.id,
          name: currentItem.title,
          count: 1,
          total: currentItem.price,
        };
      }
      if (itemIndex < 0) {
        return {
          ...state,
          cardData: [...state.cardData, toDeleteItem],
        };
      } else {
        return {
          ...state,
          cardData: [
            ...state.cardData.slice(0, itemIndex),
            toDeleteItem,
            ...state.cardData.slice(itemIndex + 1),
          ],
        };
      }

    case "BOOK_DELETED_FROM_CARD":
      const bookIdDelete = action.payload;
      const currentItemDelete = state.books.find(
        (book) => book.id === bookIdDelete
      );
      const deleteIndex = state.cardData.findIndex(
        ({ id }) => id === bookIdDelete
      );
      const innedItem = state.cardData[deleteIndex];

      let newItem;

      if (innedItem) {
        newItem = {
          ...innedItem,
          count: innedItem.count - 1,
          total: innedItem.total - currentItemDelete.price,
        };
      }
      let count = newItem.count;
      if (count > 0) {
        return {
          ...state,
          cardData: [
            ...state.cardData.slice(0, deleteIndex),
            newItem,
            ...state.cardData.slice(deleteIndex + 1),
          ],
        };
      } else {
        return {
          ...state,
          cardData: [
            ...state.cardData.slice(0, deleteIndex),
            ...state.cardData.slice(deleteIndex + 1),
          ],
        };
      }

    case "ALL_BOOK_DELETED":
      const allDeleteBookId = action.payload;

      const deleteAllIndex = state.cardData.findIndex(
        ({ id }) => id === allDeleteBookId
      );

      if (deleteAllIndex > -1) {
        return {
          ...state,
          cardData: [
            ...state.cardData.slice(0, deleteAllIndex),
            ...state.cardData.slice(deleteAllIndex + 1),
          ],
        };
      } else {
        break;
      }

    default:
      return state;
  }
};

export default reducer;
