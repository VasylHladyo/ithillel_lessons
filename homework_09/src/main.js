/*
* Вам необхідно написати функцію, яка приймає на вхід масив чисел і повертає новий масив, що містить тільки ті числа,
* які є простими числами.
* */

let a = [1, 2, 3, 4, 5, 6];
// function primeNum(arr) {
//     let arrPrime = [];
//     for (let i = 0; i < arr.length; i++) {
//         let num = arr[i];
//         let isPrime = true;
//
//         if (num <= 1) {
//             continue;
//         }
//         for (let j = 2; j < num; j++) {
//             if (num % j === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) {
//             arrPrime.push(num);
//         }
//     }
//     return console.log(arrPrime);
// }

function primeNum(arr) {
    let result = arr.filter(number => number > 1 && ![...Array(number).keys()].slice(2).some(i => number % i === 0));
    return console.log(result);

}


primeNum(a);

console.log('===================================');
/*
* Вам необхідно написати функцію, яка приймає на вхід масив об'єктів, де кожен об'єкт описує сповіщення та має поля
* source / text / date. Вам необхідно перетворити цей масив на об'єкт, де ключем буде джерело сповіщення,
* а значенням - масив сповіщень із цього джерела.
* */

let arr = [
  {source: "instagramm", text: "Ваш пост хтось лайкнув", date: "23-09-2024"},
  {source: "instagramm", text: "Ваш пост хтось лайкнув", date: "23-09-2024"},
  {source: "telegram", text: "Ваш пост хтось лайкнув", date: "23-09-2024"},
  {source: "telegram", text: "Ваш пост хтось лайкнув", date: "23-09-2024"},
  {source: "system", text: "Ваш пост хтось лайкнув", date: "23-09-2024"},
  {source: "system", text: "Ваш пост хтось лайкнув", date: "23-09-2024"},
  {source: "system", text: "Ваш пост хтось лайкнув", date: "23-09-2024"},
  {source: "system", text: "Ваш пост хтось лайкнув", date: "23-09-2024"},
  {source: "instagramm", text: "Ваш пост хтось лайкнув", date: "23-09-2024"}
];

function groupNotifications(arr){
    return console.log(Object.groupBy(arr, arr => arr.source));
}

groupNotifications(arr);

console.log('===================================');

/*
* Вам необхідно написати функцію, яка приймає на вхід масив і повністю повторює поведінку методу масиву group
* */

let arr2 = [
    {source: "instagramm", text: "Ваш пост хтось лайкнув", date: "23-09-2024"},
    {source: "instagramm", text: "Ваш пост хтось лайкнув", date: "23-09-2024"},
    {source: "telegram", text: "Ваш пост хтось лайкнув", date: "23-09-2024"},
    {source: "telegram", text: "Ваш пост хтось лайкнув", date: "23-09-2024"},
    {source: "system", text: "Ваш пост хтось лайкнув", date: "23-09-2024"},
    {source: "system", text: "Ваш пост хтось лайкнув", date: "23-09-2024"},
    {source: "system", text: "Ваш пост хтось лайкнув", date: "23-09-2024"},
    {source: "system", text: "Ваш пост хтось лайкнув", date: "23-09-2024"},
    {source: "instagramm", text: "Ваш пост хтось лайкнув", date: "23-09-2024"}
];

function group(arr2){
    let result = {};
    for(let i = 0; i < arr2.length; i++) {
        let source = arr2[i].source;
        if (!result[source]) {
            result[source] = [];
        }
        result[source].push(arr2[i]);
    }
    return console.log(result);
}

group(arr2);