import { createAsyncThunk } from "@reduxjs/toolkit";

import { Profile } from "../../types/profile";

import { ThunkConfig } from "1app/porviders/StoreProvider/config/StateSchema";

export const fetchProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>("profile/fetchProfileData", async (_, ThunkApi) => {
  const { extra, rejectWithValue } = ThunkApi;

  try {
    const response = await extra.api.get<Profile>(
      "/profile"
    );
    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue("error");
  }
});
