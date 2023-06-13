import { classNames } from "./classNames";

describe("classNames", () => {
  test("with firts param", () => {
    expect(classNames("someClass")).toEqual("someClass");
  });
  test("with firts param and additional class", () => {
    expect(classNames("someClass", {}, ["class1", "class2"])).toEqual(
      "someClass class1 class2",
    );
  });
  test("with firts param,mods and additional class", () => {
    expect(
      classNames("someClass", { hovered: true, selected: true }, [
        "class1",
        "class2",
      ]),
    ).toEqual("someClass class1 class2 hovered selected");
  });
  test("with firts param,mods(one mode false) and additional class", () => {
    expect(
      classNames("someClass", { hovered: true, selected: false }, [
        "class1",
        "class2",
      ]),
    ).toEqual("someClass class1 class2 hovered");
  });
  test("with firts param,mods(one mode undefined) and additional class", () => {
    expect(
      classNames("someClass", { hovered: true, selected: undefined }, [
        "class1",
        "class2",
      ]),
    ).toEqual("someClass class1 class2 hovered");
  });
});
