import { StateSchema } from "@/app/providers/StoreProvider";
import {
  getArticleDetailsData,
  getArticleDetailsIsLoading,
  getArticleDetailsError,
} from "./ArticleDetails";

describe("ArticleDetails", () => {
  test("should return data", () => {
    const data = {
      id: "1",
      title: "title",
    };
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data: data,
      },
    };

    expect(
      getArticleDetailsData(state as StateSchema)
    ).toEqual(data);
  });

  test("should work wity empty state data", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(
      getArticleDetailsData(state as StateSchema)
    ).toEqual(undefined);
  });

  test("should return isLoading", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true,
      },
    };

    expect(
      getArticleDetailsIsLoading(state as StateSchema)
    ).toEqual(true);
  });

  test("should return isLoading", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: false,
      },
    };

    expect(
      getArticleDetailsIsLoading(state as StateSchema)
    ).toEqual(false);
  });

  test("should work wity empty state isLoading", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(
      getArticleDetailsIsLoading(state as StateSchema)
    ).toEqual(false);
  });

  test("should return error", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: "error",
      },
    };

    expect(
      getArticleDetailsError(state as StateSchema)
    ).toEqual("error");
  });

  test("should work wity empty state error", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(
      getArticleDetailsError(state as StateSchema)
    ).toEqual(undefined);
  });
});
