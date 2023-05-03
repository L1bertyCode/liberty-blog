import { createAsyncThunk } from "@reduxjs/toolkit";

import { Profile } from "../../types/profile";

import { ThunkConfig } from "1app/porviders/StoreProvider/config/StateSchema";

export const fetchProfileData = createAsyncThunk<
  Profile,
  string,
  ThunkConfig<string>
>(
  "profile/fetchProfileData",
  async (profileId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
      const response = await extra.api.get<Profile>(
        `profile/${profileId}`
      );
      if (!response.data) {
        throw new Error();
      }
      return response.data;
    } catch (error) {
      return rejectWithValue("error");
    }
  }
);
