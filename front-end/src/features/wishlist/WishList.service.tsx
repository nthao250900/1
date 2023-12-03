import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import { TypeProduct } from "types/Types";

const wishListItems = localStorage.getItem("wishList");
const initialState = {
  wishListItem: wishListItems ? JSON.parse(wishListItems) : [],
};
const wishListItemSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addToWishList: (state: any, action: { payload: TypeProduct }) => {
      const itemIndex = state.wishListItem?.findIndex(
        (item: any) => item.idProduct === action.payload.idProduct
      );
      if (itemIndex >= 0) {
        message.error("The product is already in the wishlist.");
      } else {
        message.success("Successfully added favorite products.");
        state.wishListItem.push(action.payload);
        localStorage.setItem("wishList", JSON.stringify(state.wishListItem));
      }
    },
    removeWishList: (
      state: any,
      action: { payload: TypeProduct | undefined }
    ) => {
      const removeItem = state.wishListItem.filter(
        (e: any) => e.idProduct !== action.payload?.idProduct
      );
      state.wishListItem = removeItem;
      localStorage.setItem("wishList", JSON.stringify(state.wishListItem));
      message.success("Deleted the onion product successfully.");
    },
  },
});

export const { addToWishList, removeWishList } = wishListItemSlice.actions;
export default wishListItemSlice.reducer;
