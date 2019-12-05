'use strict';

const chinaPrice = 100;
const chiliPrice = 250;
const avstraliaPrice = 170;
const indiaPrice = 80;
const jamaicePrice = 120;

let userChoise = prompt('Укажите страну доставки');


if (userChoise === null) {
  alert('Отмененно пользователем')

} else {

  switch (userChoise.toLowerCase()) {
    case 'китай':      
      console.log(`Доставка в Китай будет стоить ${chinaPrice} кредитов`);
      break;

    case 'чили':      
      console.log(`Доставка в Чили будет стоить ${chiliPrice} кредитов`);
      break;

    case 'австралия':      
      console.log(`Доставка в Австралия будет стоить ${avstraliaPrice} кредитов`);
      break;

    case 'индия':      
      console.log(`Доставка в Индия будет стоить ${indiaPrice} кредитов`);
      break;

    case 'ямайка':     
      console.log(`Доставка в Ямайка будет стоить ${jamaicePrice} кредитов`);
      break;

    default:

      alert('В вашей стране доставка не доступна');
  }

}