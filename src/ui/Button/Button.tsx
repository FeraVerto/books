import React from 'react'
import s from './Button.module.css'

export type ButtonType = {
    text: string
    type: "button" | "submit" | "reset" | undefined
    onClick?: () => void
}

export const Button = ({type,  text, onClick}: ButtonType) => {
    return (
        <button className={s.button} type={type} onClick={onClick}>{text}</button>
    )
}