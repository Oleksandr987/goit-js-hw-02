/* eslint-disable linebreak-style */
/* eslint-disable no-alert */
let input;
const numbers = [];
let total = 0;
do {
  input = prompt();
  if (input !== null) {
    numbers.push(Number(input));
  }
} while (input !== null);

for (let i = 0; i < numbers.length; i += 1) {
  total += numbers[i];
}
console.log(`Общая сумма чисел равна ${total}`);
