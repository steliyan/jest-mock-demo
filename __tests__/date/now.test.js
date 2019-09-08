it("should return mocked date when now() is mocked", () => {
  jest.spyOn(global.Date, "now").mockImplementationOnce(() => 42);

  expect(Date.now()).toEqual(42);
});

it("should not return mocked date when no mock", () => {
  expect(Date.now()).not.toEqual("42");
});
