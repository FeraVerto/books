import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navigation = () => {
    return (
        <div>
            <NavLink to="/">Список книг</NavLink>
            <NavLink to="/create">Создать книгу</NavLink>
        </div>
    )
}