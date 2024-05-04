import { BookRecord } from '../../BookList/BookList';

export const getBooks = (): Array<BookRecord> | undefined => {
  const resultArray: Array<BookRecord> = [];
  const keys: Array<string> = Object.keys(localStorage);

  if (keys.length !== 0) {
    for (const key of keys) {
      const book = localStorage.getItem(key);
      if (book !== null) {
        const parsedBook = JSON.parse(book);
        resultArray.push({ id: key, book: parsedBook });
      }
    }
    return resultArray;
  } else {
    return [];
  }
};
