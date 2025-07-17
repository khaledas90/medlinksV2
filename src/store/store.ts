import { configureStore } from "@reduxjs/toolkit";
import { mainApi } from "./api/global";
import { userApi } from "./api";
import { setupListeners } from "@reduxjs/toolkit/query";
import uiReducer from "./uiSlice";
import cartReducer from "./cartSlice";
import filterReducer from "./FillterSlice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    cart: cartReducer,
    filter: filterReducer,
    [userApi.reducerPath]: userApi.reducer,
    [mainApi.reducerPath]: mainApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(mainApi.middleware)
      .concat(userApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
