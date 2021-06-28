import React, {Dispatch, useEffect, useState} from 'react'
import {Button} from '../common/Button/Button';
import {Input} from "../common/Input/Input";
import s from "./Search.module.css"
import {useFormik} from "formik";
import {ActionType, StateType} from "../../App";
import {getBooks} from "../common/getBooks";
import {BookRecord} from "../BookList/BookList";

type SearchType = {
    state: StateType
    dispatch: Dispatch<ActionType>
}

export const Search = ({dispatch, state}: SearchType) => {

    const [receivedBooks, setReceivedBooks] = useState<Array<BookRecord>>([])

    const formik = useFormik({
        initialValues: {
            search: ''
        },
        onSubmit: values => {
            dispatch({type: 'SET_BOOKS_LIST', payload: receivedBooks})
            dispatch({type: "SEARCH_FILTER", payload: {filter: values.search}})
        }
    });

    useEffect(() => {
        setReceivedBooks(getBooks())
    }, [])

    return (
        <form onSubmit={formik.handleSubmit} className={s.search}>

            <Input id={"search"}
                   className={s.search_input}
                   name={"search"}
                   onChange={formik.handleChange}
                   value={formik.values.search}
                   type="search"/>
            <Button text={"Search"} type={"submit"}/>
        </form>

    )
}