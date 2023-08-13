import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './CartProvider';
import searchReducer from './SearchProvider';
import favoritsReducer from './FavoritsProvider';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const persistedCart = persistReducer(persistConfig, cartReducer)
const persistedFavorit = persistReducer(persistConfig, favoritsReducer)


export const store = configureStore({
    reducer: { cart: persistedCart, favorit: persistedFavorit, search: searchReducer },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export let persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch