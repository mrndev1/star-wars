import { GET_CHARACTERS, GET_FILMS, GET_PLANETS } from "../actions/starwars/routes/get";

const initial_state = { films: [], people: [], planets: [] };

const sw_reducer = (state = initial_state, action) => {
    switch (action.type) {
        case GET_CHARACTERS: return { ...state, people: action.payload  };
        case GET_PLANETS: return { ...state, planets: action.payload  };
        case GET_FILMS: return { ...state, films: action.payload };
        default: return { ...state };
    }
};

export default sw_reducer;