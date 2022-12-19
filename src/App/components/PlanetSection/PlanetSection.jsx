import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { get_items } from "../../../redux/actions/starwars/routes/get";

// components
import Loading from "../Loading/Loading";
import Planets from "./Planets";

export default function PlanetSection () {

    let dispatch = useDispatch();

    let planets = useSelector(state => state.sw_reducer.planets);

    let [ current_page, set_current_page ] = useState(1);
    let planets_per_page = 12;
    
    let page_cant = Math.ceil(planets.length / planets_per_page);
    let last_item = planets_per_page * current_page;
    let first_item = last_item - planets_per_page
    
    let planets_to_render = planets.slice(first_item, last_item);

    let pagination = (page) => { set_current_page(page) }
    useEffect(() => { dispatch(get_items('planets')) }, [dispatch]);

    return (
        !planets.length? <Loading/>
        : <Planets
            planets={planets_to_render}
            pagination={pagination}
            pages={page_cant}
            page={current_page}
        />
    )
};