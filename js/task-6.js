/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable no-alert */
const numbers = [];
let total = 0;
let isCancel = 0;
do {
  const input = prompt();
  if (input === null) {
    isCancel = 1;
  } else {
    const inputNumber = Number(input);
    if (!Number.isNaN(inputNumber)) {
      numbers.push(inputNumber);
    } else {
      alert('Вы ввели число с ошибкой!!!');
    }
  }
} while (isCancel === 0);
function overTotal(number) {
  if (number.length === 0) {
    return 0;
  }
  for (let i = 0; i < number.length; i++) {
    total += number[i];
  }
  return total;
}

console.log(`Общая сумма чисел равна ${overTotal(numbers)}`);
