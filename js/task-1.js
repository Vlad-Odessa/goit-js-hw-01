const name = "«Генератор защитного поля»"; // Write code on this line
// Объяви две переменные хранящие название и цену товара name и price.

// Присвой переменным следующие характеристики товара (сразу при объявлении)

// название: «Генератор защитного поля»
// цена: 1000
// Используя шаблонную строку и переменные name и price задай новой переменной firstMessage текст:

// Выбран «Генератор защитного поля», цена за штуку 1000 кредитов
// Присвой товару (price) новую цену - 2000

// Используя шаблонную строку и переменные name и price задай новой переменной secondMessage текст:

// Выбран «Генератор защитного поля», цена за штуку 2000 кредитов

let price = 1000; // Write code on this line
const firstMessage = `Выбран ${name}, цена за штуку ${price} кредитов`; // Write code on this line
console.log(firstMessage);

price = 2000;
const secondMessage = `Выбран ${name}, цена за штуку ${price} кредитов`; // Write code on this line
console.log(secondMessage);
