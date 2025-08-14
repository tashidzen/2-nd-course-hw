// Задание 1
const a = 'js';
console.log(a.toUpperCase());

// Задание 2
function func(arr, str){
    str = str.toLowerCase();
    const newArr = arr.filter(item => item.toLowerCase().startsWith(str));
    return newArr;
}

array = ['уЖе', 'хуже', 'нет', 'муж', 'ужас', 'Ужин'];
st = 'УЖ';
console.log(func(array, st));

// Задание 3
const num = 32.58884;
console.log('До меньшего целого: ', Math.floor(num));
console.log('До большего целого: ', Math.ceil(num));
console.log('До ближайшего целого: ', Math.round(num));

// Задание 4
console.log('Минимальное число: ', Math.min(52, 53, 49, 77, 21, 32));
console.log('Максимальное число: ', Math.max(52, 53, 49, 77, 21, 32));

// Задание 5
function funcRandom(){
    let num = Math.floor(Math.random() * 10) + 1;
    // let num = Math.ceil(Math.random() * 10); // Альтернатива
    return num;
}

console.log(funcRandom());

// Задание 6
function returnArr(num){
    const arr = [];
    for(i = 0; i < num/2; i++){
        arr.push(Math.floor(Math.random() * num));
    }
    return arr;
}

let n = Number(prompt('Введите целое число от 2 до 20: '));
if (isNaN(n)){
    confirm('Введено не число');
}  else if (n < 2 || n > 20){
    confirm('Число не входит в диапазон от 2 до 20');
} else if (n % 1 !== 0){
    confirm('Вы ввели нецелое число');
} else{
    console.log(returnArr(n));
}

// Задание 7
function twoNum(num1, num2){
    let result = Math.floor(Math.random() * (num2 - num1 + 1) + num1);
    return result;
}

let x = Number(prompt('Введите первое целое число: '));
let y = Number(prompt('Введите второе целое число: '));
if (isNaN(x) || isNaN(y)){
    confirm('Оба или одно из введенных значений не являются числовыми');
} else if ((x % 1 !== 0) || (y % 1 !== 0)){
    confirm('Вы ввели нецелое число');
} else {
    if(x < y){
        console.log('Случайное число из диапазона: ', twoNum(x, y));
    } else {
        console.log('Случайное число из диапазона: ', twoNum(y, x));
    }
}

// Задание 8
console.log('Текущая дата:', new Date());

// Задание 9
let currentDate = new Date();
let searchDate = new Date();
searchDate.setDate(currentDate.getDate() + 73);
console.log('Через 73 дня будет', searchDate);

// Задание 10
const arrayMonth = ["января", "февраля", "марта", "апреля", "мая",
     "июня", "июля", "августа", "сентября", "ноября", "декабря"];
const days = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];

function returnDate(d){
    let num = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    let day = d.getDay();
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    console.log("Дата:", num, arrayMonth[month], year, '- это', days[day], '.');
    console.log("Время:", hour, ':', min, ':', sec, '.');
}

let curDate = new Date();
returnDate(curDate);