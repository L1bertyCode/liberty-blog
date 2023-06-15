import { rtkApi } from "@/shared/api/rtkApi";
import { User } from "../types/user";
import { JsonSettings } from "../types/jsonSettings";

interface SetJsonSettingsArgs {
  userId: string;
  jsonSettings: JsonSettings;
}

const userApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    setJsonSettings: build.mutation<User, SetJsonSettingsArgs>({
      query: (args) => ({
        url: `/users/${args.userId}`,
        method: "PATCH",
        body: {
          jsonSettings: args.jsonSettings,
        },
      }),
    }),
  }),
});

export const setJsonSettingsMutation = userApi.endpoints.setJsonSettings.initiate;
