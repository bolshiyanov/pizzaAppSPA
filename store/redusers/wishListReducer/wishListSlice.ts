import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WishListState {
  items: string[];
}

const initialState: WishListState = {
  items: [],
};

export const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addToWishList (state, action: PayloadAction<string>) {
      state.items.push(action.payload);
    },
  },
});



export default wishListSlice.reducer;