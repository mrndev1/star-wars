import React from "react";
import s from './Loading.module.css'

export default function Loading () {
    return (
        <div className={s.container}>
            <div className={s.container_loading}></div>
        </div>
    )
};