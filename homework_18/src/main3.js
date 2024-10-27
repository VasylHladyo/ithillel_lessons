// /*
// * sequenceAsync.Реалізуйте функцію sequenceAsync, яка приймає масив функцій-промісів asyncFunctions. Кожна функція-проміс
// * приймає попередній результат як аргумент і повертає новий результат. Функція sequenceAsync має виконати проміси
// * послідовно, передаючи результат попереднього промісу в наступний. Зверніть увагу, що вам потрібно надати реалізацію
// * функції sequenceAsync, яка дозволяє виконувати довільну кількість функцій-промісів у правильному порядку.
// * */
// function sequenceAsync(asyncFunctions) {
//     return asyncFunctions.reduce((promise, currentFunction) => {
//         return promise.then(currentFunction);
//     }, Promise.resolve(0));
// }
//
// const asyncFunc1 = (prevResult) => new Promise(resolve => {
//     setTimeout(() => {
//         const result = prevResult + 1;
//         console.log('Функція 1 завершена, результат:', result);
//         resolve(result);
//     }, 1000);
// });
//
// const asyncFunc2 = (prevResult) => new Promise(resolve => {
//     setTimeout(() => {
//         const result = prevResult + 2;
//         console.log('Функція 2 завершена, результат:', result);
//         resolve(result);
//     }, 500);
// });
//
// const asyncFunc3 = (prevResult) => new Promise(resolve => {
//     setTimeout(() => {
//         const result = prevResult + 3;
//         console.log('Функція 3 завершена, результат:', result);
//         resolve(result);
//     }, 800);
// });
//
// sequenceAsync([asyncFunc1, asyncFunc2, asyncFunc3])
//     .then(finalResult => {
//         console.log('Фінальний результат:', finalResult);
//     });
