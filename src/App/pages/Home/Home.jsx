import React from "react";
import { Outlet, useLocation } from "react-router-dom";

// style
import s from './Home.module.css';

// componentss
import Header from "../../components/Header/Header";
import HomeSection from "../../components/HomeSection/HomeSection";


export default function Home () {

    let location = useLocation().pathname;

    return (
        <div  className={s.container}>
            <Header/>
            {
                location === '/'? <HomeSection/>
                : <Outlet/>
            }
        </div>
    )
};