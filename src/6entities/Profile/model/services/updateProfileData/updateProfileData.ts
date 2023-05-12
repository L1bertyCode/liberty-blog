import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  Profile,
  ValidateProfileError,
} from "../../types/profile";

import { ThunkConfig } from "1app/providers/StoreProvider/config/StateSchema";
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";
import { validateProfileData } from "../validateProfileData/validateProfileData";

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileError[]>
>("profile/updateProfileData", async (_, ThunkApi) => {
  const { extra, rejectWithValue, getState } = ThunkApi;

  const formData = getProfileForm(getState());

  const errors = validateProfileData(formData);
  if (errors.length) {
    return rejectWithValue(errors);
  }
  try {
    const response = await extra.api.put<Profile>(
      "/profile/" + formData?.id,
      formData
    );
    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    return rejectWithValue([
      ValidateProfileError.SERVER_ERROR,
    ]);
  }
});
