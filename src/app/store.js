import {configureStore} from "@reduxjs/toolkit";
import dadJokesReducer from "../features/dadjokes/dadjokesslice";

export default configureStore({
    reducer: {
        dadJokes : dadJokesReducer,
    }
})