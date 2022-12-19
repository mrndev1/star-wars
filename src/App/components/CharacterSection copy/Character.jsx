import React from "react";

// style
import s from '../style.module.css';

export default function Character ({ url, name, height, mass, birth }) {

    let img_url = `https://starwars-visualguide.com/assets/img/characters/`;
    let url_length = url.length;

    return (
        <div className={s.items_container}>
            <img className={s.items_container_img} src={img_url + url.slice(url_length-3, url_length-1) + '.jpg'} alt="character"/>
            <div className={s.items_container_info}>
                <div className={s.items_container_info_item}>{name}</div>
                <div className={s.items_container_info_item}>Height: {height}</div>
                <div className={s.items_container_info_item}>Mass: {mass}</div>
                <div className={s.items_container_info_item}>Birth: {birth}</div>
            </div>
        </div>
    )
};