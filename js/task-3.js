'use strict';
const ADMIN_PASSWORD = 'jqueryismyjam'

let message;

const userChoise = prompt('Введите пароль Admin.');


if (userChoise === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else if (userChoise === null) {
  message = 'Отменено пользователем!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}

alert(message);