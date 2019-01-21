const assert = require('assert');

const SYMBOLS = [
  [[' _ '], ['| |'], ['|_|']], //0
  [['   '], ['  |'], ['  |']], //1
  [[' _ '], [' _|'], ['|_ ']], //2
  [[' _ '], [' _|'], [' _|']], //...
  [['   '], ['|_|'], ['  |']],
  [[' _ '], ['|_ '], [' _|']],
  [[' _ '], ['|_ '], ['|_|']],
  [[' _ '], ['  |'], ['  |']],
  [[' _ '], ['|_|'], ['|_|']],
  [[' _ '], ['|_|'], ['  |']],
];

const digitToSymbol = digit => {
  assert(!isNaN(digit), `${digit}: is not a valid digit`);
  assert(digit <= 9 && digit >= 0, `${digit}: is not a valid digit`);
  return SYMBOLS[Number(digit)];
};

assert.deepEqual(
  digitToSymbol('1'),
  SYMBOLS[1],
  "it must return the digit corresponding to string '1'",
);
assert.deepEqual(
  digitToSymbol(1),
  SYMBOLS[1],
  "it must return the digit corresponding to number '1'",
);
assert.throws(() => digitToSymbol('@'), {
  message: '@: is not a valid digit',
});
assert.throws(() => digitToSymbol('123'), {
  message: '123: is not a valid digit',
});

const numberToLCDSymbols = number =>
  String(number)
    .split('')
    .filter(n => !isNaN(n))
    .map(digitToSymbol);

assert.deepEqual(numberToLCDSymbols('123'), [
  SYMBOLS[1],
  SYMBOLS[2],
  SYMBOLS[3],
]);
assert.deepEqual(numberToLCDSymbols('éç2'), [SYMBOLS[2]]);

const buildPrintableLines = lcdSymbols =>
  lcdSymbols
    .reduce(
      (acc, lcdSymbol) => {
        lcdSymbol.forEach((row, idx) => acc[idx].push(...row));
        return acc;
      },
      [[], [], []],
    )
    .map(lines => lines.join(''));

assert.deepEqual(buildPrintableLines([SYMBOLS[1], SYMBOLS[2], SYMBOLS[3]]), [
  '    _  _ ',
  '  | _| _|',
  '  ||_  _|',
]);

module.exports = {
  buildPrintableLines,
  numberToLCDSymbols,
};
