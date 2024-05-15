import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    _id: '',
    wishlist : 0,
    cart :0,
  }
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = {
        _id: '',
        wishlist : 0,
        cart :0,
      };
    },

  },
});

export const { setUserDetails, logout } = authSlice.actions;

export default authSlice.reducer;
