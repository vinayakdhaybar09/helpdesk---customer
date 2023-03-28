import { baseUrl } from "@/utilities/utils";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (payload) => {
    const response = await axios.post(`${baseUrl}/user/login`, payload);
    return response.data;
  }
)

const userSlice = createSlice({
  name: "user",
  initialState: {
    userDetails: {},
  },
  reducers: {
    addUserDetails: (state, action) => {
      const key = Object.keys(action.payload)[0];
      return {
        ...state,
        userDetails: {
          ...state.userDetails,
          [key]: action.payload[key],
        },
      };
    },
  },
  extraReducers: (builder) => {
    // Login user 
    builder.addCase(loginUser.pending, (state) => {
      state.userDetailsLoader = true;
    })
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.userDetails = action.payload
      localStorage.setItem('loggedIn', "loggedIn");
      localStorage.setItem('userId', action.payload?._id);
      localStorage.setItem('token', action.payload?.token);
      state.userDetailsLoader = false;
    })
    builder.addCase(loginUser.rejected, (state) => {
      state.userDetailsLoader = false;
    })

  },
});

export const { addUserDetails } = userSlice.actions;
export default userSlice.reducer;
