'use strict';
const credits = 23580;
const pricePerDroid = 3000;

let userChoise = prompt('Укажите количество дроидов которые хотите купить.');
let totalPrice;
let toStay;
let message;


if (userChoise === null) {
  message = 'Отменено пользователем!';

} else {
  totalPrice = pricePerDroid * userChoise;

  if (credits < totalPrice) {
    message = 'Недостаточно средств на счету!';

  } else {
    toStay = credits - totalPrice;
    message = `Вы купили ${userChoise} дроидов, на счету осталось ${toStay} кредитов.`;
  }
}
console.log(message);