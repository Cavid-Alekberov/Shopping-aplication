import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cartState, ICart, IRomoveCart } from "../types";

const initialState: cartState = {
    items: [],
    totalQuantity: 0,
    popUp: false
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        popUped(state, action) {
            state.popUp = action.payload
        },
        addItemToCart(state, action: PayloadAction<ICart>) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);

            state.totalQuantity++;
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    title: newItem.title,
                    image: newItem.image,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItemFromCart(state, action: PayloadAction<IRomoveCart>) {
            const removeItem = action.payload;
            const existingItem: any = state.items.find((item) => item.id === removeItem.id);
            state.totalQuantity--;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== removeItem.id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - removeItem.price;
            }
        },
        deleteCartItem(state, action) {
            const deleteItem = action.payload;
            state.items = state.items.filter(item => item.id !== deleteItem.id);
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice;
