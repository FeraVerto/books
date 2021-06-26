import React, {ChangeEvent} from 'react'
import s from "./Input.module.css"

export type InputType = {
    className?: string
    id: string
    onChange?: (event: ChangeEvent) => void
    value?: string
    type: string
    onBlur?: () => void
    name: string
}

export const Input = ({className, id, onChange, value, type, name, ...rest}: InputType) => {
    return (
        <input type={type}
               className={`${s.input} ${className}`}
               id={id}
               onChange={onChange}
               value={value}
               name={name}
               {...rest}
        />
    )
}