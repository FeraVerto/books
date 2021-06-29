import {BookType} from "../BookList/BookList";

export const validate = (values: BookType) => {
    const errors = {} as BookType
    if (!values.title) {
        errors.title = 'Required'
    }

    if (!values.author) {
        errors.author = 'Required'
    }

    if (!values.cover) {
        errors.cover = 'Required'
    }
    return errors
}