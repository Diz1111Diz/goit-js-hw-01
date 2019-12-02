'use strict';
let userChoise = prompt('Укажите страну доставки:(Китай, Чили, Австралия, Индия, Ямайка...)').toLowerCase();

let country;
let price;
let message;

switch (userChoise) {
  case 'китай':
    country = userChoise;
    price = 100;
    alert(message = `Доставка в [${country}] будет стоить [${price}] кредитов`);
    break;

  case 'чили':
    country = userChoise;
    price = 250;
    alert(message = `Доставка в [${country}] будет стоить [${price}] кредитов`);
    break;

  case 'австралия':
    country = userChoise;
    price = 170;
    alert(message = `Доставка в [${country}] будет стоить [${price}] кредитов`);
    break;

  case 'индия':
    country = userChoise;
    price = 80;
    alert(message = `Доставка в [${country}] будет стоить [${price}] кредитов`);
    break;

  case 'ямайка':
    country = userChoise;
    price = 120;
    alert(message = `Доставка в [${country}] будет стоить [${price}] кредитов`);
    break;

  default:

    alert(message = 'В вашей стране доставка не доступна');

}