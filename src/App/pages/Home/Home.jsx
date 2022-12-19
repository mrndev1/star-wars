import React from "react";
import { Outlet, useLocation } from "react-router-dom";

// style
import s from './Home.module.css';

// components
import Header from "../../components/Header/Header";
import Loading from "../../components/Loading/Loading";


export default function Home () {

    let location = useLocation().pathname;

    return (
        <div  className={s.container}>
            <Header/>
            {
                location === '/'? <Loading/>
                : <Outlet/>
            }
        </div>
    )
};