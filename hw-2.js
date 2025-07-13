// Задание 1
let a = 10;
alert(a);
a = 20;
alert(a);

// Задание 2
const yearOfFirstIPhone = 2007;
alert(`Год выпуска первого iPhone: ${yearOfFirstIPhone}`);

// Задание 3
const nameOfCreatorJS = 'Brendan Eich';
alert(`Имя создателя языка JavaScript: ${nameOfCreatorJS}`);

// Задание 4
let x = 10;
let y = 2;
alert(`Сумма x и y: ${x + y}`);
alert(`Разность x и y: ${x - y}`);
alert(`Произведение x и y: ${x * y}`);
alert(`Частное x и y: ${x / y}`);

// Задание 5
let two = 2;
let result = two ** 5;
alert(`Два в пятой степени = ${result}`);

// Задание 6
a = 9;
let b = 2;
alert(`Остаток от деления a на b: ${a % b}`);

// Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

// Задание 8
let age = prompt(`Сколько вам лет?`);
alert(age);

// Задание 9
const user = {
    name: 'Ivan',
    age: 30,
    isAdmin: true,
}
//alert(`${user.name}, ${user.age}, ${user.isAdmin}`);

// Задание 10
const nameOfUser = prompt(`Введите ваше  имя:`);
alert(`Привет, ${nameOfUser}!`);

// Доп. задание
let pickNumber = prompt(`Загадайте любое целое число от 0 до 100:`);
let firstResult = pickNumber * 2;
alert(firstResult);
let secondResult = firstResult + 10;
alert(secondResult);
let thirdResult = secondResult / 2;
alert(thirdResult);
let fourthResult = thirdResult - pickNumber;
alert(fourthResult);
alert(`Ваш результат равен 5!`);