// Задание 1
function refund(a, b) {
    if (a < b) {
        console.log(`Меньшее из двух чисел: ${a}`);
    } else if (a===b) {
        console.log(`Числа равны ${a}`);
    } else {
        console.log(`Меньшее из двух чисел: ${b}`);
    }
}

refund(1, 2);
refund(3, 1);
refund(3, 3);

// Задание 2
function checkingForParity(a) {
    if (a % 2 == 0) {
        console.log(`Число четное`);
    } else {
        console.log(`Число нечетное`);
    }
}

checkingForParity(5);
checkingForParity(10);

// Задание 3
function square(a) {
    let sq = a * a;
    console.log(`Квадрат числа ${a} = ${sq}`);
    return sq;
}

square(10);
let s = square(5);
console.log(`Проверка возможности использования значения. Квадрат числа = ${s}`);

// Задание 4
function userQuestion() {
    let userAge = prompt(`Сколько вам лет?`);
    if (userAge < 0) {
        console.log(`Вы ввели неправильное значение`);
    } else if (userAge >= 0 && userAge <= 12) {
        console.log(`Привет, друг!`);
    } else {
        console.log(`Добро пожаловать!`);
    }
}

userQuestion();

// Задание 5
function mult(a, b) {
    if (isNaN(a || b)) {
        return ("Одно или оба значения не являются числом");
    } else {
        return (`Произведение чисел = ${a * b}`);
    }
}

console.log(mult(2,6));
console.log(mult("kulumbulum",6));

// Задание 6
function inputFunc() {
    let n = prompt(`Введите число`);
    if (isNaN(n)) {
        return ("Переданный параметр не является числом");
    } else {
        return (`n в кубе равняется ${n ** 3}`);
    }
}

console.log(inputFunc());

// Задание 7
const pi = 3.14;

function getArea(){
    console.log(pi * this.radius ** 2);
};

function getPerimeter(){
    console.log(2 * pi * this.radius);
};

const circle1 = {
    radius: 3,
    area: getArea,
    per: getPerimeter,
};

const circle2 = {
    radius: 4,
    area: getArea,
    per: getPerimeter,
};

circle1.area();
circle1.per();
circle2.area();
circle2.per();