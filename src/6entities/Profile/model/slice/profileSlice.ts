import {
  PayloadAction,
  createSlice,
} from "@reduxjs/toolkit";
import { Profile, ProfileSchema } from "../types/profile";
import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData";
const initialState: ProfileSchema = {
  readOnly: true,
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setReadOnly: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.readOnly = action.payload;
    },
    cancelEdit: (state) => {
      state.readOnly = true;
      state.form = state.data;
    },
    updateProfile: (
      state,
      action: PayloadAction<Profile>
    ) => {
      state.form = {
        ...state.data,
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchProfileData.pending,
      (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      }
    );
    builder.addCase(
      fetchProfileData.rejected,
      (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }
    );
    builder.addCase(
      fetchProfileData.fulfilled,
      (state, action: PayloadAction<Profile>) => {
        state.isLoading = false;
        state.data = action.payload;
        state.form = action.payload;
      }
    );
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
