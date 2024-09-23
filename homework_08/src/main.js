/*
* Напишіть функцію capitalizeStrings, яка приймає на вхід масив рядків і повертає новий масив, у якому кожен рядок має
* першу літеру у верхньому регістрі, а решту літер - у нижньому регістрі.
* */

let arrStr = [
    'Lorem ipsum dolor sit amet',
    'consetetur sadipscing elitr',
    'sed diam nonumy eirmod tempor'
];
function capitalizeStrings(arr){
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let str = arr[i];
        let capitalizedStr = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        result.push(capitalizedStr);
    }
    return console.log(result);
}

capitalizeStrings(arrStr);

/*
* Напишіть функцію findCommonElements, яка приймає на вхід два масиви і повертає новий масив, що містить елементи,
* які є в обох вихідних масивах.
* */

let a = [1, 2, 3, 4];
let b = [3, 4, 5, 6];

function findCommonElements(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            result.push(arr1[i]);
        }
    }
    return console.log(result);
}

findCommonElements(a, b);

/*
* Напишіть функцію analyzeArray, яка приймає на вхід масив чисел і повертає об'єкт з такими властивостями:
sum - сума всіх елементів масиву
average - середнє значення елементів масиву
min - мінімальне значення в масиві
max - максимальне значення в масиві
* */

let c = [2, 1, 3, 4, 5];

function analyzeArray(arr) {
    let sum = 0;
    let min = arr[0];
    let max = arr[0];
    let average = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    average = sum / arr.length;

    return console.log({
        sum: sum,
        average: average,
        min: min,
        max: max
    });
}

console.log('Вхідний масив ' + c);
analyzeArray(c);