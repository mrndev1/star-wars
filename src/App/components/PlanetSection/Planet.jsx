import React from "react";

// style
import s from '../style.module.css'

export default function Planet ({ name, population, terrain }) {
    return (
        <div className={s.items_container}>
            <div className={s.items_container_info}>
                <div className={s.items_container_info_item}>{name}</div>
                <div className={s.items_container_info_item}>{population}</div>
                <div className={s.items_container_info_item}>{terrain}</div>
            </div>
        </div>
    )
};