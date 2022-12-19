import React from "react";
import { Link } from "react-router-dom";
import s from './Header.module.css';

export default function Header () {
    return (
        <header className={s.header}>
            <h1><Link className={s.header_list_item} to='/'>STAR WARS</Link></h1>
            <ul className={s.header_list}>
                <li><Link className={s.header_list_item} to='/films'>FILMS</Link></li>
                <li><Link className={s.header_list_item} to='/characters'>PEOPLE</Link></li>
                <li><Link className={s.header_list_item} to='/planets'>PLANETS</Link></li>
            </ul>
        </header>
    )
};