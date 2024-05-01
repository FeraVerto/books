import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigaton.module.css';

export const Navigation = () => {
  return (
    <div className={s.navigation}>
      <NavLink to="/">List of books</NavLink>
      <NavLink to="/create">Create book</NavLink>
    </div>
  );
};
