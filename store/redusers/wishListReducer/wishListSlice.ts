
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WishListState {
  items: string[];
  count: number;
}

const initialState: WishListState = {
  items: [],
  count: 0,
};

export const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addToWishList(state, action: PayloadAction<string>) {
      state.items.push(action.payload);
      state.count += 1;
    },
    removeFromWishList(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item !== action.payload);
      state.count -= 1;
    },
  },
});

export const { addToWishList, removeFromWishList } = wishListSlice.actions;

export default wishListSlice.reducer