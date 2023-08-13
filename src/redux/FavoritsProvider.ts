import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFavorits, IFavoritsState } from "../types";

const initialState: IFavoritsState = {
    favorits: [],
}

const favoritsSlice = createSlice({
    name: "favorits",
    initialState,
    reducers: {
        addItemToFavorits(state, action: PayloadAction<IFavorits>) {
            const newItem = action.payload;
            const existingItem = state.favorits.find((item) => item.id === newItem.id);

            if (!existingItem) {
                state.favorits.push({
                    id: newItem.id,
                    price: newItem.price,
                    title: newItem.title,
                    image: newItem.image,
                    category: newItem.category
                });
            } else {
                state.favorits = state.favorits.filter(item => item.id !== existingItem.id);
            }
        },
        removeItemFromFavorits(state, action) {
            const favoritItemId = action.payload;
            state.favorits = state.favorits.filter(item => item.id !== favoritItemId);
        }
    }
})

export const favoritsActions = favoritsSlice.actions;

export default favoritsSlice.reducer;
