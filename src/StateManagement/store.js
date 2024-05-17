import { configureStore } from "@reduxjs/toolkit";
import { ContactInfoAPI } from "../contactInfoAPI/api.js";

export const store = configureStore({
  reducer: {
    [ContactInfoAPI.reducerPath]: ContactInfoAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ContactInfoAPI.middleware),
});
export default store;
