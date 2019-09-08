const { get } = require("axios");

const getCatFact = async () => {
  const {
    data: { fact }
  } = await get(`https://catfact.ninja/fact`);
  return fact;
};

module.exports = { getCatFact };
