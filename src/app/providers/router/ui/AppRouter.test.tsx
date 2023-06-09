import { componentRender } from "@/shared/lib/tests/componentRender/componentRender";
import AppRouter from "./AppRouter";
import {
  getRouteAbout,
  getRouteAdmin,
  getRouteMain,
  getRouteProfile,
} from "@/shared/const/router";
import { screen } from "@testing-library/react";
import { UserRole } from "@/entities/User";

describe("app/router/AppRouter", function () {
  test("Page render ok", async () => {
    componentRender(<AppRouter />, {
      route: getRouteAbout(),
    });
    const page = await screen.findByTestId("AboutPage");
    expect(page).toBeInTheDocument();
  });
  test("Page not found", async () => {
    componentRender(<AppRouter />, {
      route: "/afdadsfasd",
    });
    const page = await screen.findByTestId("NotFoundPage");
    expect(page).toBeInTheDocument();
  });
  test("Redirect to MainPage if user is not auth", async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile("1"),
    });
    const page = await screen.findByTestId("MainPage");
    expect(page).toBeInTheDocument();
  });
  test("Access is open if user is auth", async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile("1"),
      initialState: {
        user: { _inited: true, authData: {} },
      },
    });
    const page = await screen.findByTestId("ProfilePage");
    expect(page).toBeInTheDocument();
  });

  test("Access closed if user doesn't have a role", async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: {
        user: { _inited: true, authData: {} },
      },
    });
    const page = await screen.findByTestId("ForbiddenPage");
    expect(page).toBeInTheDocument();
  });

  test("Access closed if user doesn't have a role", async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: {
        user: {
          _inited: true,
          authData: { roles: [UserRole.ADMIN] },
        },
      },
    });
    const page = await screen.findByTestId(
      "AdminPanelPage"
    );
    expect(page).toBeInTheDocument();
  });
});
