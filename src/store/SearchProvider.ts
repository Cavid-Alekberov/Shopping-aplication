import { createSlice } from "@reduxjs/toolkit";
import { searchState } from "../types";

const initialState: searchState = {
    showSearch: false,
}

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        showSearchInput(state) {
            state.showSearch = true
        },
        closeSearchInput(state) {
            state.showSearch = false
        }
    }
})

export const searchActions = searchSlice.actions;

export default searchSlice;
