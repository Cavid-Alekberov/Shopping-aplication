import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cartState, ICart, IRomoveCart } from "../types";

const initialState: cartState = {
    items: [],
    totalQuantity: 0,
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        addItemToCart(state, action: PayloadAction<ICart>) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);

            state.totalQuantity += newItem.quantity;
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    category: newItem.category,
                    quantity: newItem.quantity,
                    totalPrice: newItem.price,
                    title: newItem.title,
                    image: newItem.image,
                });
            } else {
                existingItem.quantity += newItem.quantity;
                existingItem.totalPrice += newItem.price;
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
            state.totalQuantity -= deleteItem.quantity
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
