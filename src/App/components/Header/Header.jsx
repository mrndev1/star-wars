import React from "react";
import { Link } from "react-router-dom";
import s from './Header.module.css';

export default function Header () {
    return (
        <header className={s.header}>
            <h1 className={s.header_title}>STAR WARS</h1>
            <ul className={s.header_list}>
                <li><Link className={s.header_list_item} to='/home/films'>FILMS</Link></li>
                <li><Link className={s.header_list_item} to='/home/characters'>PEOPLE</Link></li>
                <li><Link className={s.header_list_item} to='/home/planets'>PLANETS</Link></li>
            </ul>
        </header>
    )
};