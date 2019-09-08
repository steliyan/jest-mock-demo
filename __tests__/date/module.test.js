it("mock date with jest.spyOn", () => {
  jest.spyOn(global, "Date").mockImplementation(() => ({
    toLocaleDateString: () => "2010-1-1"
  }));

  expect(new Date().toLocaleDateString()).toEqual("2010-1-1");
});

it("no date mock", () => {
  expect(new Date().toLocaleDateString()).not.toEqual("2010-1-1");
});
