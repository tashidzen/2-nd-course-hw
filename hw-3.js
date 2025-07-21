// Задание 1
let password = 'пароль';
let userPass = prompt("Введите пароль");
if(userPass===password){
    console.log("Пароль введен верно");
} else{
    console.log("Пароль введен неправильно");
};

// Задание 2
// let c = 0;
// let c = 10;
// let c = -3;
let c = 2;
(c > 0 && c < 10)?(console.log("Верно")):(console.log("Неверно"));

// Задание 3
let d = 101;
let e = 0;
(d > 100 || e > 100)?(console.log("Верно")):(console.log("Неверно"));

// Задание 4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));

//Задание 5
let monthNumber = Number(prompt("Введите порядковый номер месяца"));
switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        console.log('Месяц принадлежит к сезону "Зима"');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Месяц принадлежит к сезону "Весна"');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Месяц принадлежит к сезону "Лето"');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Месяц принадлежит к сезону "Осень"');
        break;
    default:
        console.log('Номер месяца больше 12 или введено нечисловое значение');
};

// Доп. задание 1
let x = prompt("Пожалуйста, введите любое число");
if (isNaN(x)) {
    alert("Введено нечисловое значение!");
} else {
    if(x % 2 === 0) {
        alert("Число четное");
    } else {
        alert("Число нечетное");
    }
}

// Доп. задание 2
// let clientOS = 0; // iOS
let clientOS = 1; // Android
(clientOS === 0)?(console.log("Установите версию приложения для iOS по ссылке")):(console.log("Установите версию приложения для Android по ссылке"));

// Доп. задание 3
// let clientOS = 0; // iOS
// let clientOS = 1; // Android
let clientDeviceYear = 2015;
if (clientOS === 0) {
    if(clientDeviceYear < 2015) {
        console.log("Установите облегченную версию приложения для iOS по ссылке");
    } else {
        console.log("Установите версию приложения для iOS по ссылке")
    }
} else {
    if(clientDeviceYear < 2015) {
        console.log("Установите облегченную версию приложения для Android по ссылке");
    } else {
        console.log("Установите версию приложения для Android по ссылке")
    }
}