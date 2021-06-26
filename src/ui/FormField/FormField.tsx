import React, {ChangeEvent, useState} from 'react'
import {FormikValues} from "formik/dist/types";
import s from "./FormField.module.css"
import {Input} from "../Input/Input";

export type FormField = {
    formik: FormikValues
    title: string
    author: string
    cover?: string
}

export const FormField = ({formik, title, author, cover}: FormField) => {

    /*const [newTitle, setNewTitle] = useState<string>(title)
    const [newAuthor, setNewAuthor] = useState<string>(author)*/

    return (
        <>
            <label htmlFor="title">{title}</label>
            <Input id="title"
                   type="text"
                   {...formik.getFieldProps('title')}
                /*onChange={(e: any) => setNewTitle(e.target.value)}*/
            />

            <label htmlFor="author">{author}</label>
            <Input id="author"
                   type="text"
                /*onChange={(e: any) => setNewAuthor(e.target.value)}*/
                   {...formik.getFieldProps('author')}/>


            <Input className={s.input_image}
                   id="cover"
                   type="file"
                   name="cover"
                   onBlur={formik.handleBlur}
                   onChange={(event: ChangeEvent) => {
                       const target = event.target as HTMLInputElement
                       formik.setFieldValue("cover", (target.files as FileList)[0]);
                   }}
            />


        </>
    )
}