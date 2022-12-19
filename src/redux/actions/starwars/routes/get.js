import axios from "axios";
import { get_all_items } from "../controllers/get";
import { concat_arr } from "./util";

export const GET_CHARACTERS = 'GET_CHARACTERS';
export const GET_PLANETS = 'GET_PLANETS';
export const GET_FILMS = 'GET_FILMS';

export const get_items = (path) => {
    return async dispatch => {
        let items;
        
        try { items = await (await axios.get(`/${path}`)).data } catch (e) { console.log(e) }

        if ( items.count < 10 ) items = items.results;
        else {
            let items_arr = await get_all_items(items);
            items = concat_arr (items_arr);
        }

        if (path === 'people') dispatch({ type: GET_CHARACTERS, payload: items });
        else if (path === 'planets') dispatch({ type: GET_PLANETS, payload: items });
        else if (path === 'films') dispatch({ type: GET_FILMS, payload: items });
    }
};