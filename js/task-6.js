'use strict';

let input;
let total = 0;
let message;

do {
  input = prompt('Введите число');
  input = Number(input);
  total += input;     
}
while (input) {
  alert(message = `Общая сумма чисел равна ${total}`);
}

