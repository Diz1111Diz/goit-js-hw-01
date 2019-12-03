'use strict';

let input;
let total = 0;

do {
  input = prompt('Введите число', '');
  let convertInput = Number(input);
  if(Number.isNaN(convertInput)){
    alert('Было введено не число, попробуйте еще раз');
  }else{
    total += convertInput;
  }
}while(input !== null)
  alert(`Общая сумма чисел равна ${total}`);


