const enhancer = require("./enhancer.js");
// test away!
test("initial test", () => {
  expect(true).toBe(true);
});

describe("enhancement fns", () => {
  let item = {};
  beforeEach(() => {
    item.name = "Great Sword";
    item.durability = 20;
    item.enhancement = 10;
    return item;
  });
  test("repair", () => {
    expect(enhancer.repair(item)).toStrictEqual({ ...item, durability: 100 });
  });
  test("success", () => {
    expect(enhancer.success(item)).toStrictEqual({ ...item, enhancement: 11 });
  });
  test("fail", () => {
    expect(enhancer.fail(item)).toStrictEqual({ ...item, durability: 15 });
    item.durability = 20;
    item.enhancement = 17;
    expect(enhancer.fail(item)).toStrictEqual({ ...item, durability: 10, enhancement: 16 });
    item.durability = 20;
    item.enhancement = 15;
    expect(enhancer.fail(item)).toStrictEqual({ ...item, durability: 10 });
  });
  test("get name", () => {
    expect(enhancer.get(item)).toStrictEqual({ ...item, name: `[+10] Great Sword` });
  });
});
