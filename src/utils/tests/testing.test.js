import { sum, stringUppercase } from "../testing";

test("summ of two numbers", () => {
  expect(sum(5, 7)).toBe(12);
});

test("uppercase string", () => {
  const str = "Hello World!";
  expect(stringUppercase(str)).toBe(str.toUpperCase());
});
/*
describe("testing file", () => {
  describe("testing file 2", () => {
    it("should calc the summ of two numbers", () => {
      expect(sum(15, 102)).toBe(117);
    });
  });
});
*/
