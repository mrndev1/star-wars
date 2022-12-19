import axios from "axios";


// the people are found in the api call result variable - results - wich is an array that contains 10 people of 82
// When we make an api call to the path - /people - we get this:
//? "count": 82, "next": "https://swapi.dev/api/people/?page=2", "previous": null, "results": [10]
// so to get the 82 people we must make api calls to the next url and the next (where there are the other 10 from 82 people) an so on.
export const get_all_items = async (info) => {
    let items = [];

    if ( info.next ) {
        let new_info = await axios.get(info.next);
        items = await get_all_items (new_info.data);
    }

    items.push(info.results);
    return items;
};