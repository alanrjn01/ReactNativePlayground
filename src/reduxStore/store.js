import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";

//creo la store y agrego los reducer
export const store = configureStore({
  reducer:{
    user:userReducer
  }
})