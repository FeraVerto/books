import { BookRecord } from './ui/components/BookList/BookList';

export type ActionType = {
  type: string;
  payload: any;
};

export const initialState = {
  books: [],
};

export type StateType = {
  books: Array<BookRecord>;
};

export const reducer = (
  state: StateType = initialState,
  action: ActionType
): StateType => {
  switch (action.type) {
    case 'SET_BOOKS_LIST':
      return {
        ...state,
        books: [...action.payload],
      };

    case 'SEARCH_FILTER':
      return {
        ...state,
        books: state.books.filter(
          (b) =>
            b.book.title
              .toLowerCase()
              .includes(action.payload.filter.toLowerCase()) ||
            b.book.author
              .toLowerCase()
              .includes(action.payload.filter.toLowerCase())
        ),
      };

    default:
      return state;
  }
};
