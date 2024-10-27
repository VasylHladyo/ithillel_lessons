// /*
// * randomDelayPrint. Створіть функцію randomDelayPrint, яка прийматиме рядок message як аргумент і виводитиме кожну букву
// * цього рядка з довільною затримкою від 0 до 1 секунди. Використовуйте setTimeout, щоб додати випадкову затримку перед
// * виведенням кожної літери.
// * */
// function randomDelayPrint(message) {
//     let accumulatedDelay = 0;
//     let result = '';
//
//     message.split('').forEach((char) => {
//         const delay = Math.random() * 1000;
//         accumulatedDelay += delay;
//         setTimeout(() => {
//             console.log(char);
//         }, accumulatedDelay);
//     });
// }
// randomDelayPrint("Hello world!");
//
//
