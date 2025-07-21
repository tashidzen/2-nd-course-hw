// Задание 1
for(let i=0; i<2; i++){
    console.log("Привет");
}

// Задание 2
let a = 1;
while(a <= 5){
    console.log(a);
    a += 1;
}

// Задание 3
let b = 7;
while(b <= 22){
    console.log(b);
    b += 1;
}

// Задание 4
const obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
}
for (let key in obj){
    console.log(`${key} - ${obj[key]}$`);
}

// Задание 5
let n = 1000;
let num = 0;
while(n >= 50){
    n /= 2;
    num += 1;
}
console.log(`Полученное число: ${n}, количество итераций: ${num}`);

// Задание 6
for(let friday = 4; friday <= 31; friday = friday + 7){
    console.log(`Сегодня пятница, ${friday}-е число. Необходимо подготовить отчет.`);
}

// Доп. задание 1
let k = 100;
let iterations = 0;
while (k > 0){
    k -= 7;
    iterations+=1;
}
console.log(`Полученное число: ${k}, количество итераций: ${iterations}`);

// Доп. задание 2
const months = ["Январь", "Февраль", "Март", "Апрель","Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
for (let j = 0; j < months.length; j++) {
    console.log(`${j+1}. ${months[j]}`);
}

// Доп. задание 3
const book = {
    "название": "Вот это книга",
    "автор": "Гигант мысли",
    "год издания": "2025",
    "жанр": "Драма"
}
for (let z in book){
    console.log(`${z}: ${book[z]}`);
}

// Доп. задание 4
const arr = [9, 4, 33, 57, 89, 99, 0, 1, 100, 876];
let min = arr[0];
for(x = 0; x < arr.length; x++){
    if(min > arr[x]){
        min = arr[x];
    }
    console.log(`Минимальное число в массиве = ${min}`);
}
