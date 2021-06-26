import React, {ChangeEvent, Dispatch, useEffect, useState} from 'react';
import {ActionType, StateType} from "../../App";
import {Redirect, useParams} from "react-router-dom";
import {useFormik} from "formik";
import {FormField} from "../FormField/FormField";
import {BookType} from "../BookList/BookList";
import {getBase64} from "../common/getBase64";
import {Button} from "../common/Button/Button";
import s from "./EditBook.module.css"
import {log} from "util";

export type EditBookType = {
    state: StateType
    dispatch: Dispatch<ActionType>
    editMode: boolean
    setEditMode: (editMode: boolean) => void
}


export const EditBook = ({state, dispatch, editMode, setEditMode}: EditBookType) => {
    const {id} = useParams<{ id: string }>()


    const [localStateUpdate, setLocalStateUpdate] = useState<string | null>("")
    const [localStateDelete, setLocalStateDelete] = useState<string>("")


    const deleteBook = (id: string) => {
        setLocalStateDelete(id)
    }

    const updateBook = () => {
        setEditMode(true)
    }


    const formik = useFormik<BookType>({
        initialValues: {
            title: '',
            author: '',
            cover: {}
        },
        onSubmit: values => {
            getBase64(values.cover).then(base64 => {
                values = {...values, cover: base64}
                setLocalStateUpdate(JSON.stringify(values))
                updateBook()
            });

        }
    })

    useEffect(() => {
        localStateUpdate && localStorage.setItem(id, localStateUpdate)
        localStateDelete && localStorage.removeItem(localStateDelete)
        setEditMode(false)
    })

    if (editMode) return <Redirect to='/'/>

    return (
        <div className={s.create_position}>
            <div className={s.form}>

                {
                    state.books.map(b => {
                        return b.id === id &&
                            (
                                <form onSubmit={formik.handleSubmit} key={b.id}>
                                    <FormField formik={formik}
                                               title={"Book Title"}
                                               author={"Author"}
                                               cover={b.book.cover}
                                    />

                                    <Button type={"submit"}
                                            text={"Удалить"}
                                            onClick={() => {
                                                deleteBook(b.id)
                                                setEditMode(true)
                                            }}/>
                                    <Button type={"submit"}
                                            text={"Сохранить"}
                                    />

                                </form>
                            )
                    })
                }
            </div>
        </div>
    )
}

