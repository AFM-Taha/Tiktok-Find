import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

export interface WishlistState {
  wishlist: any[];
}

const initialState: WishlistState = {
  wishlist: [],
};

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const isExist = state.wishlist.find(
        (c: any) => c.id === action.payload.id
      );

      if (isExist) {
        toast.error('This product already added!');
        return;
      } else {
        state.wishlist = [...state.wishlist, { ...action.payload }];
        toast.success('Successfully added');
      }
    },
    removeOne: (state, action) => {
      const removeOne = state.wishlist.filter(
        (c: any) => c.id !== action.payload
      );
      state.wishlist = removeOne;
      toast.error('Removed');
    },
    removeAll: (state) => {
      state.wishlist = [];
      toast.error('Cart Clear');
    },
  },
});

export const { addToWishlist, removeOne, removeAll } = wishlistSlice.actions;

export default wishlistSlice.reducer;
