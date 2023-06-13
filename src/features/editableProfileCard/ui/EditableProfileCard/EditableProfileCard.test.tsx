import { screen } from "@testing-library/react";

import { Profile } from "@/entities/Profile";
import { Currency } from "@/entities/Currency";
import { Country } from "@/entities/Country";
import userEvent from "@testing-library/user-event";
import { $api } from "@/shared/api/api";
import { profileReducer } from "../../model/slice/profileSlice";
import { EditableProfileCard } from "./EditableProfileCard";
import { componentRender } from "@/shared/lib/tests/componentRender/componentRender";

const profile: Profile = {
  id: "1",
  firstname: "admin",
  lastname: "admin",
  age: 111,
  currency: Currency.EUR,
  country: Country.Germany,
  city: "Moscow",
  username: "admin213",
};

const options = {
  initialState: {
    profile: {
      readOnly: true,
      data: profile,
      form: profile,
    },
    user: {
      authData: { id: "1", username: "admin" },
    },
  },
  asyncReducers: {
    profile: profileReducer,
  },
};

describe("features/EditableProfileCard", () => {
  test("mode readOnly should toggle", async () => {
    componentRender(<EditableProfileCard id="1" />, options), options;
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.EditButton"),
    );
    expect(
      screen.getByTestId("EditableProfileCardHeader.CancelButton"),
    ).toBeInTheDocument();
    expect(screen.debug());
  });

  test("When u press cancel , the values of inputs are returned", async () => {
    componentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.EditButton"),
    );

    await userEvent.clear(screen.getByTestId("ProfileCard.firstname"));
    await userEvent.clear(screen.getByTestId("ProfileCard.lastname"));

    await userEvent.type(screen.getByTestId("ProfileCard.firstname"), "user");
    await userEvent.type(screen.getByTestId("ProfileCard.lastname"), "user");

    expect(screen.getByTestId("ProfileCard.firstname")).toHaveValue("user");
    expect(screen.getByTestId("ProfileCard.lastname")).toHaveValue("user");

    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.CancelButton"),
    );

    expect(screen.getByTestId("ProfileCard.firstname")).toHaveValue("admin");
    expect(screen.getByTestId("ProfileCard.lastname")).toHaveValue("admin");
  });

  test("Must be errror", async () => {
    componentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.EditButton"),
    );

    await userEvent.clear(screen.getByTestId("ProfileCard.firstname"));

    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.SaveButton"),
    );

    expect(
      screen.getByTestId("EditableProfileCard.Error.Paragraph"),
    ).toBeInTheDocument();
  });

  test("Если нет ошибок валидации, то на сервер должен уйти PUT запрос", async () => {
    const mockPutReq = jest.spyOn($api, "put");
    componentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.EditButton"),
    );

    await userEvent.type(screen.getByTestId("ProfileCard.firstname"), "user");

    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.SaveButton"),
    );

    expect(mockPutReq).toHaveBeenCalled();
  });
});
