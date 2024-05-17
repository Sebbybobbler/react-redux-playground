import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getDadJoke = createAsyncThunk("dadJokes/getDadJoke", async () => {
    const response = await fetch(`https://icanhazdadjoke.com/`, {
        headers: {Accept:"application/JSON"}});
    const json = await response.json();
    return json;
});

export const dadJokesSlice = createSlice({
    name: "dadJokes",
    initialState: {
        joke:null,
        loading:false,
        error:false,
    },
    reducers: {
        getNewJoke: (state, action) => {
            const newJoke = action.payload;
            state.joke = newJoke;
        },
    },
    extraReducers: (builder)=>{
        builder.addCase(getDadJoke.fulfilled,(state, action) => {
            const newJoke = action.payload.joke;
            state.joke = newJoke;
            state.loading=false;
            state.error=false;
        }).addCase(getDadJoke.pending,(state)=>{
            state.loading=true;
            state.error=false;
        }).addCase(getDadJoke.rejected,(state)=>{
            state.error=true;
            state.loading=false;
        })
    },
});

export const { getNewJoke } = dadJokesSlice.actions;
export const selectDadJoke = (state) => state.dadJokes.joke;
export default dadJokesSlice.reducer;
