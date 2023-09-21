// - Aufgabe 1_1 --------------------------------------------------------------
console.log("%c 1_1 ----------", "background: purple; color: white");
console.log(Math.PI);

const PI = Math.PI;
console.log(Math.PI);

const roundedPI = PI.toFixed(2);
console.log(roundedPI);

// - Aufgabe 1_2 --------------------------------------------------------------
console.log("%c 1_2 ----------", "background: purple; color: white");

let array = [3.14, 193.4464, 0.8596433607, -2.940629089];

for (let i = 0; i < array.length; i++) {
  let rounded_num = Math.round(array[i]);
  console.log(rounded_num);
}

// for (initialisierung; bedingung; iteration) { }
// man sollte immer let i und let rounded_num schreiben auch wenn es ohne let geht

// - Aufgabe 1_3 --------------------------------------------------------------
console.log("%c 1_3 ----------", "background: purple; color: white");

randomNum = Math.random();
console.log(randomNum);
randomNum1_10 = Math.ceil(Math.random() * 10);
console.log(randomNum1_10);
randomNum1_100 = Math.ceil(Math.random() * 100);
console.log(randomNum1_100);

// - Aufgabe 2_1 --------------------------------------------------------------
console.log("%c 2_1 ----------", "background: purple; color: white");

function roundTo(Zahl, Genauigkeit) {
  return Number(Zahl.toFixed(Genauigkeit));
}

console.log(roundTo(3.1415926535, 5));
