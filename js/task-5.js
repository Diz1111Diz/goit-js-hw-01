'use strict';

let userChoise = prompt('Укажите страну доставки').toLowerCase();
let country;
let price;


switch (userChoise) {
  case 'китай':
    country = userChoise;
    price = 100;
    console.log(`Доставка в [${country}] будет стоить [${price}] кредитов`);
    break;

  case 'чили':
    country = userChoise;
    price = 250;
    console.log(`Доставка в [${country}] будет стоить [${price}] кредитов`);
    break;

  case 'австралия':
    country = userChoise;
    price = 170;
    console.log(`Доставка в [${country}] будет стоить [${price}] кредитов`);
    break;

  case 'индия':
    country = userChoise;
    price = 80;
    console.log(`Доставка в [${country}] будет стоить [${price}] кредитов`);
    break;

  case 'ямайка':
    country = userChoise;
    price = 120;
    console.log(`Доставка в [${country}] будет стоить [${price}] кредитов`);
    break;

  default:

    alert('В вашей стране доставка не доступна');

}