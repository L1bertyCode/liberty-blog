import {
  ThunkConfig,
} from "1app/porviders/StoreProvider/config/StateSchema";
import { User, userActions } from "6entities/User";
import { USER_LOCALSTORAGE_KEY } from "7shared/const/localstorage";
import { createAsyncThunk } from "@reduxjs/toolkit";

export interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkConfig<string>
>("login/loginByUsername", async (authData, ThunkApi) => {
  const { extra, dispatch, rejectWithValue } = ThunkApi;
  try {
    const response = await extra.api.post<User>(
      "/login",
      authData
    );

    if (!response.data) {
      throw new Error();
    }

    localStorage.setItem(
      USER_LOCALSTORAGE_KEY,
      JSON.stringify(response.data)
    );
    dispatch(userActions.setAuthData(response.data));
    // extra.navigate("/about");

    return response.data;
  } catch (error) {
    return rejectWithValue("error");
  }
});
