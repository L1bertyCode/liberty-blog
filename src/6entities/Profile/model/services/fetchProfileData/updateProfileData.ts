import { createAsyncThunk } from "@reduxjs/toolkit";

import { Profile } from "../../types/profile";


import { ThunkConfig } from "1app/porviders/StoreProvider/config/StateSchema";
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";


export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>("profile/updateProfileData", async (_, ThunkApi) => {
  const { extra, rejectWithValue, getState } = ThunkApi;

  const formData = getProfileForm(getState());
  try {
    const response = await extra.api.put<Profile>(
      "/profile",formData
    );

    return response.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue("error");
  }
});