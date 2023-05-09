import { configureStore } from '@reduxjs/toolkit';

import cartSlice from './CartProvider';
import searchSlice from './SearchProvider';

const store = configureStore({
    reducer: { cart: cartSlice.reducer, search: searchSlice.reducer },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch