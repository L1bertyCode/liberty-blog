export type Mods = Record<
  string,
  boolean | string | undefined
>;
export const classNames = (
  cls: string,
  mods: Mods = {},
  additional: Array<string | undefined> = []
): string => {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([keyCkassName, valueClassName]) =>
        Boolean(valueClassName)
      )
      .map(([keyCkassName, valueClassName]) => {
        return keyCkassName;
      }),
  ].join(" ");
};
