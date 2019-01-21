const readline = require('readline');
const {buildPrintableLines, numberToLCDSymbols} = require('./lcdSymbols');

const printLCDSymbolsFromString = string =>
  buildPrintableLines(numberToLCDSymbols(string)).forEach(e => console.log(e));

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Saisissez votre nombre à afficher sur l'écran LCD:\n", string => {
  printLCDSymbolsFromString(string);
  rl.close();
});
