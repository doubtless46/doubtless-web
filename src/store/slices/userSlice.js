import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      return { ...state, ...action.payload };
    },
    LogoutUser: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});
 export const {setUser,LogoutUser} = userSlice.actions;
export default userSlice.reducer;