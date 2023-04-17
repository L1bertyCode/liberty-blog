import { ThunkConfig } from "1app/porviders/StoreProvider/config/StateSchema";
import { User, userActions } from "6entities/User";
import { USER_LOCALSTORAGE_KEY } from "7shared/const/localstorage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkConfig<string>
>("login/loginByUsername", async (authData, thunkAPI) => {
  try {
    const response = await axios.post<User>(
      "http://localhost:8000/login",
      authData
    );

    if (!response.data) {
      throw new Error();
    }

    localStorage.setItem(
      USER_LOCALSTORAGE_KEY,
      JSON.stringify(response.data)
    );

    thunkAPI.dispatch(
      userActions.setAuthData(response.data)
    );

    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue("error");
  }
});
