'use strict';
const total = 100;
const ordered = 100;
let message;

if (ordered <= total) {
  message = 'Заказ оформлен, с вами свяжется менеджер.';
} else {
  message = 'На складе недостаточно твоаров!';
};

console.log(message);