/*
Створіть функцію reverseArray, яка приймає масив і повертає новий масив, елементи якого розташовані у зворотному порядку.
* */

let reverseArr = [];
function reverseArray(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        reverseArr.push(arr[i]);
    }
    return console.log(reverseArr);
}

reverseArray([1, 2, 3, 4]);

/*
* Створіть функцію uniqueValues, яка приймає два масиви і повертає новий масив, що містить тільки унікальні значення з
* обох масивів (без дублікатів).
* Про Метод includes() прочитав на ресурсі https://xn--80adth0aefm3i.xn--j1amh/array.includes
*
* В ідеалі я міг не створювати новий масив с[], а переписати якийсь з існуючих масивів.
* */

let a = [1, 2, 3, 4];
let b = [3, 4, 5, 6];
let c = a;

function uniqueValues(a, b){
    for (let i = 0; i < b.length; i++) {
        if (!a.includes(b[i])) {
            c.push(b[i]);
        }
    }
    return console.log(c);
}

uniqueValues(a, b);

/*
* Напишіть функцію calculateAverageGrade, яка приймає на вхід масив об'єктів з інформацією про
* студентів (ім'я, вік, середній бал) і повертає середній бал усіх студентів.
* */

let arr = [
    {
        name: 'Vasyl',
        age: 31,
        averageScore: 100,
    },
    {
        name: 'Ihor',
        age: 22,
        averageScore: 90,
    },
    {
        name: 'Roman',
        age: 19,
        averageScore: 80,
    }
];
let result = 0;
let resSum = 0;
function calculateAverageGrade(arr){
    for(i = 0; i < arr.length; i++){
        result = result + arr[i].averageScore;
    }
    resSum = result / arr.length;
    return console.log(resSum);
}

calculateAverageGrade(arr);
