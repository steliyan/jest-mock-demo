it("should return mocked 2010-1-1 date", () => {
  const now = new Date();
  expect(now.toLocaleDateString()).toEqual("2010-1-1");
});
