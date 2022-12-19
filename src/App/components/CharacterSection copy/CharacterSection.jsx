import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_items } from "../../../redux/actions/starwars/routes/get";

// components
import Loading from "../Loading/Loading";
import Characters from "./Characters";

export default function CharacterSection () {

    let dispatch = useDispatch ();

    let people = useSelector(state => state.sw_reducer.people);

    let [ current_page, set_current_page ] = useState(1);
    let characters_per_page = 12;
    
    let page_cant = Math.ceil(people.length / characters_per_page);
    let last_item = characters_per_page * current_page;
    let first_item = last_item - characters_per_page
    
    let characters_to_render = people.slice(first_item, last_item);
    
    let pagination = (page) => { set_current_page(page) }
    useEffect(() => { dispatch(get_items('people')) }, [dispatch]);

    return (
        !people.length? <Loading/>
        : <Characters
            characters={characters_to_render}
            pagination={pagination}
            pages={page_cant}
            page={current_page}
        />
    )
};