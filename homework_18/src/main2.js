// /*
// * concurrentPromises.Створіть функцію concurrentPromises, яка приймає масив промісів і максимальну кількість промісів,
// * що виконуються одночасно. Функція має виконати проміси паралельно, але не більше зазначеної максимальної кількості.
// * Результатом функції має бути масив результатів промісів.
// * */
//
// //Тут я скористався допомогою chatgpt правда трохи модифікував йього
//
// function concurrentPromises(promises, maxConcurrent) {
//     const results = [];
//     let currentIndex = 0;
//     let activePromises = 0;
//
//     return new Promise((resolve) => {
//         function executeNext() {
//             while (activePromises < maxConcurrent && currentIndex < promises.length) {
//                 const promise = promises[currentIndex];
//                 activePromises++;
//
//                 promise
//                     .then(result => {
//                         results[currentIndex] = result;
//                         console.log(`Promise ${currentIndex + 1} completed with result: ${result}`);
//                     })
//                     .finally(() => {
//                         activePromises--;
//                         currentIndex++;
//                         executeNext();
//
//                         if (currentIndex === promises.length && activePromises === 0) {
//                             resolve(results);
//                         }
//                     });
//             }
//         }
//
//         executeNext();
//     });
// }
//
// concurrentPromises([
//     new Promise(resolve => setTimeout(() => resolve('Promise 1'), 1000)),
//     new Promise(resolve => setTimeout(() => resolve('Promise 2'), 500)),
//     new Promise(resolve => setTimeout(() => resolve('Promise 3'), 800))
// ], 2).then(results => {
//     console.log("All results:", results);
// });
//
//
//
