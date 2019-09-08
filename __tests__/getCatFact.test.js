const { getCatFact } = require("../getCatFact");
const mockAxios = require("axios");

it("should return only fact as a string", async () => {
  const promise = getCatFact();

  mockAxios.mockResponse({
    status: 200,
    data: {
      fact: "Cats are the most dangerous predators on Earth.",
      length: 48
    }
  });

  const data = await promise;
  expect(data).toEqual("Cats are the most dangerous predators on Earth.");
});
