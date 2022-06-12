const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme

const promiseOutput = async (emosi) => {
  let x = await promiseTheaterIXX();
  let y = await promiseTheaterVGC();
  let gabungan = x.concat(y);
  let result = 0;
  gabungan.map((x) => x.hasil === emosi && (result += 1));
  return result;
};

module.exports = {
  promiseOutput,
};
