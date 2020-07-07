import classnames, { scopedClassMaker } from "../classnames";

describe("classnames", () => {
  it("receive one className", () => {
    const result = classnames("a");
    expect(result).toEqual("a");
  });
  it("receive two classNames", () => {
    const result = classnames("a", "b");
    expect(result).toEqual("a b");
  });
  it("receive zero className", () => {
    const result = classnames();
    expect(result).toEqual("");
  });
  it("receive undefined", () => {
    const result = classnames("a", undefined);
    expect(result).toEqual("a");
  });
  it("receive other type arguments", () => {
    const result = classnames("a", undefined, "中文", null, false);
    expect(result).toEqual("a 中文");
  });
});

describe("scopedClassMaker", () => {
  it("receive string or object", () => {
    const sc = scopedClassMaker("yui-layout");
    expect(sc("")).toEqual("yui-layout");
    expect(sc("x")).toEqual("yui-layout-x");
    expect(sc({ y: true, z: false })).toEqual("yui-layout-y");
    expect(sc({ y: true, z: true })).toEqual("yui-layout-y yui-layout-z");
    expect(sc({ y: true, z: true }, { extra: "extra" })).toEqual(
      "yui-layout-y yui-layout-z extra"
    );
  });
});
