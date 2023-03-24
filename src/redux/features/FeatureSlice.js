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

const featuresSlice = createSlice({
  name: "featureName",
  initialState: {
    userDetails: {
      fullName: "",
      emailId: "",
      phoneNumber: "",
    },
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
  extraReducers: {},
});

export const { addUserDetails } = featuresSlice.actions;
export default featuresSlice.reducer;
