// Задание 1
const array = [1, 5, 4, 10, 0, 3];
let i = 0;
while (array[i]!== 10 && i < array.length){
    i++;
}
console.log(`array[${i}] = ${array[i]}`);

// Задание 2
for (let j = 0; j < array.length; j++){
    if (array[j]=== 4){
        console.log(`Индекс значения 4 = ${j}`);
    }
}

// Задание 3
const arr = [1, 3, 5, 10, 20];
console.log(arr.join(' '));

// Задание 4
const arr1 = [[], [], []];
for (let a = 0; a < 3; a++){
    for (let b = 0; b < 3; b++){
        arr1[a][b] = 1;
    }
}
console.log(arr1);

// Задание 5
const arr2 = [1, 1, 1];
arr2.push(2, 2, 2);
console.log(arr2);

// Задание 6
const arr3 = [9, 8, 7, 'a', 6, 5];
arr3.sort();
const arr4 = arr3.filter(arr3 => arr3 !== 'a');
console.log(arr4);

// Задание 7
const arr5 = [9, 8, 7, 6, 5];
userNumber = Number(prompt(`Угадайте число, которое содержится в массиве:`));
if(arr5.includes(userNumber)){
    alert(`Угадал`);
} else {
    alert(`Не угадал`);
}

// Задание 8
let str = 'abcdef';
strArray = str.split('');
str = strArray.reverse();
console.log(str.join(''));

// Задание 9
const arr6 = [[1, 2, 3],[4, 5, 6]];
const arr7 =[...arr6[0], ...arr6[1]];
console.log(arr7);

// Задание 10
const arr8 =[6, 8, 2, 3, 1];
for (let d = 0; d < arr8.length - 1; d++){
    console.log(arr8[d] + arr8[d+1]);
}

// Задание 11
function square(arr) {
    const arraySquares = arr.map(num => num**2);
    return arraySquares;
}

console.log(square([2,3,4]));

// Задание 12
function lengthOfString(arr){
    const newArr = arr.map(str => str.length);
    return newArr;
}

console.log(lengthOfString(["aga", "qwerty","up"]));

// Задание 13
function negativeNum(arr){
    const newArr = arr.filter(num => num < 0);
    return newArr;
}
console.log(negativeNum([1, 2, 3, -7, 0, -10]));

// Задание 14
const arr9 = [];
for(let x = 0; x < 10; x++) {
    arr9.push(Math.floor(Math.random()* 11));
}
const newArr9 = arr9.filter(num => num % 2 === 0);
console.log(arr9);
console.log(newArr9);

// Задание 15
const arr10 = [];
for(let x = 0; x < 6; x++) {
    arr10.push(Math.ceil(Math.random()* 10));
}
const sum = arr10.reduce((total, num) => total + num, 0);
arithmeticMean = sum / arr10.length;
console.log(`Массив чисел: ${arr10}`);
console.log(`Среднее арифметическое чисел массива = ${arithmeticMean}`);