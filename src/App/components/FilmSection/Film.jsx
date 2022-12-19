import React from "react";

// style
import s from '../style.module.css';

export default function Film ({ img, name, description, director }) {
    return (
        <div className={s.items_container}>
            <img className={s.items_container_img} src={img} alt="film" />
            <div className={s.items_container_info}>
                <div className={s.items_container_info_item}>{name}</div>
                <div className={s.items_container_info_item}>{director}</div>
                <p className={`${s.film_info_txt} ${s.items_container_info_item}`}>{description}</p>
            </div>
        </div>
    )
};