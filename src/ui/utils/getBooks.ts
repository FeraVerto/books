import {BookRecord} from "../BookList/BookList";

export const getBooks = (): Array<BookRecord> => {
    const resultArray: Array<BookRecord> = []
    const keys: Array<string> = Object.keys(localStorage);
    for (const key of keys) {
        const book = localStorage.getItem(key)
        if (book !== null) resultArray.push({id: key, book: JSON.parse(book)})
    }
    return resultArray
}