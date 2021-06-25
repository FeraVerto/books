import React from 'react'

export type FormField = {
    formik: any,
    title: string,
    author: string
}

export const FormField = ({formik, title, author}: FormField) => {
    return (
        <>
            <label htmlFor="title">{title}</label>
            <input id="title"
                   type="text"
                   {...formik.getFieldProps('title')}/>

            <label htmlFor="author">{author}</label>
            <input id="author"
                   type="text"
                   {...formik.getFieldProps('author')}/>

            <input id="cover"
                   type="file"
                   name="cover"
                   onBlur={formik.handleBlur}
                   value={formik.values.name}
                   onChange={(event: any) =>{
                       formik.setFieldValue("cover", event.target.files[0]);
                   }}/>
        </>
    )
}