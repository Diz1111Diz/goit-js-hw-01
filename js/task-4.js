'use strict';
const credits = 23580;
const pricePerDroid = 3000;

let userChoise = prompt('Укажите количество дроидов которые хотите купить.');
let totalPrice;




if (userChoise === null) {
  console.log('Отменено пользователем!');

} else {
  totalPrice = pricePerDroid * userChoise;

  if (credits < totalPrice) {
    console.log('Недостаточно средств на счету!');

  } else {   
    console.log(`Вы купили ${userChoise} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);
  }
}
