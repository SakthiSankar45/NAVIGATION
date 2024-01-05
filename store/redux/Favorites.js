import { createSlice } from "@reduxjs/toolkit";

const favSlices = createSlice({
    name: 'favorites' ,
    initialState: {ids: []},
    reducers: {
        addFavorites: (state, action) => {
            state.ids.push(action.payload.id);
        },
        removeFavorites: (state, action) => {
            state.ids.splice(state.ids.indexOf(action.payload.id), 1);
        }
    }
});

export const addFavorite = favSlices.actions.addFavorites;
export const removeFavorite = favSlices.actions.removeFavorites;
export default favSlices.reducer;