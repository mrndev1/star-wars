import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_items } from "../../../redux/actions/starwars/routes/get";

// components
import Loading from "../Loading/Loading";
import Films from "./Films";

export default function FilmSection () {

    let dispatch = useDispatch ();

    let films = useSelector(state => state.sw_reducer.films);

    let [ current_page, set_current_page ] = useState(1);
    let films_per_page = 12;
    
    let page_cant = Math.ceil(films.length / films_per_page);
    let last_item = films_per_page * current_page;
    let first_item = last_item - films_per_page
    
    let films_to_render = films.slice(first_item, last_item);

    let pagination = (page) => { set_current_page(page) }
    useEffect(() => { dispatch(get_items('films')) }, [dispatch]);

    return (
        !films.length? <Loading/>
        : <Films
            films={films_to_render}
            pagination={pagination}
            pages={page_cant}
            page={current_page}
        />
    )
};