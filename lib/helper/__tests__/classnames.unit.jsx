import classnames from "../classnames";

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
