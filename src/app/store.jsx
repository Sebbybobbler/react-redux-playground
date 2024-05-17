import { configureStore } from "@reduxjs/toolkit";
import dadJokesReducer from "../components/DadJokes/dadjokesslice";

const store=configureStore({
    reducer: {
        dadJokes: dadJokesReducer,
    },
});

export default store;
