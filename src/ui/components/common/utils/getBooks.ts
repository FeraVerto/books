import { BookRecord } from '../../BookList/BookList';

export const getBooks = (): Array<BookRecord> | undefined => {
  const resultArray: Array<BookRecord> = [];
  const keys: Array<string> = Object.keys(localStorage);
  for (const key of keys) {
    const book = localStorage.getItem(key);
    if (book !== null) {
      if (book !== null) {
        try {
          const parsedBook = JSON.parse(book);
          resultArray.push({ id: key, book: parsedBook });
        } catch (error) {
          console.error('Parsing error on item with key:', key, error);
          // В зависимости от контекста, вы можете также решить удалить некорректные данные:
          localStorage.removeItem(key);
        }
      }
    }
    return resultArray;
  }
};
