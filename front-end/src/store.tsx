import { configureStore } from "@reduxjs/toolkit";
import authReducer from "features/auth/AuthSlice";
import cartReducer from "features/cart/Cart.Slice";
import wishListItemSlice from "features/wishlist/WishList.service";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    wishList: wishListItemSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
