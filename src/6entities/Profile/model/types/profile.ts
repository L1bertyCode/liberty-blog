import { Country } from "6entities/Country";
import { Currency } from "6entities/Currency";

export interface Profile {
  firstname?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}
export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readOnly: boolean;
}
