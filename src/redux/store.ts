import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/CartSlice';
import wishlistReducer from './features/WishlistSlice';
export const store = configureStore({
  reducer: {
    carts: cartReducer,
    wishlists: wishlistReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
