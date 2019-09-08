const mockFn = jest.fn(() => 42);

afterEach(() => mockFn.mockReset());

it("should call mockFn once", () => {
  const result = mockFn();

  expect(mockFn).toHaveBeenCalledTimes(1);
  expect(result).toEqual(42);
});

it("should call the mockFn twice", () => {
  const results = [mockFn(), mockFn()];

  expect(mockFn).toHaveBeenCalledTimes(2);
  expect(results).toEqual([42, 42]);
});
