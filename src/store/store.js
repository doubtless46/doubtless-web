import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice'
// creating a store
const store=configureStore({
      reducer:{
          user:userReducer
      }
})
export default store