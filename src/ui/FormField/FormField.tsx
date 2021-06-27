import React, {ChangeEvent, useState} from 'react'
import {FormikValues} from "formik/dist/types";
import s from "./FormField.module.css"
import {Input} from "../common/Input/Input";
import download from "./../image/download.svg"
import noPhoto from "./../image/nophoto.jpg"

export type FormField = {
    formik: FormikValues
    title: string
    author: string
    cover?: string
}

export const FormField = ({formik, title, author, cover}: FormField) => {

    const [file, setFile] = useState<any>()

    const previewPhoto = file && [...file].map((file, i) => (
        <img alt={title} width={200} height={300} key={i} src={URL.createObjectURL(file)}/>
    ))

    const getFile = (event: ChangeEvent) => {
        const target = event.target as HTMLInputElement
        formik.setFieldValue("cover", (target.files as FileList)[0]);
        target.files && setFile(target.files)
    }

    return (
        <>
            <label htmlFor="title">{title}</label>
            <Input id={"title"}
                   type={"text"}
                   {...formik.getFieldProps('title')}/>

            <label htmlFor="author">{author}</label>
            <Input id={"author"}
                   type={"text"}
                   {...formik.getFieldProps('author')}/>

            <div className={s.file_block}>

                <div className={s.image_container}>
                    {previewPhoto || <img width={200} height={300} src={cover || noPhoto} alt={title}/>}
                </div>

                <div className={s.file_block_wrapper}>
                    <label className={s.input_file_button} htmlFor="cover">
                        <span className={s.input_file_icon_wrapper}>
                            <img className={s.input_file_icon} src={download}
                                 alt="Select a file" width="25"/>
                        </span>
                        <span className={s.input_file}>Select a file</span>
                    </label>

                    <Input className={s.input_image}
                           id={"cover"}
                           type={"file"}
                           name={"cover"}
                           onBlur={formik.handleBlur}
                           onChange={getFile}
                    />
                </div>
            </div>


        </>
    )
}