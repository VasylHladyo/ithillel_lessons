/*
* debounce. Створіть функцію debounce, яка приймає функцію зворотного виклику і затримку (в мілісекундах) як аргументи.
* Функція debounce повинна повертати нову функцію, яка викликає вихідну функцію тільки після того, як минула вказана
* кількість часу без викликів. Це дасть змогу ігнорувати часті виклики функції та виконувати її лише один раз через
* зазначену затримку після останнього виклику.
* */

// function debounce(callback, delay) {
//     let timeoutId;
//
//     return function() {
//         clearTimeout(timeoutId);
//
//         timeoutId = setTimeout(() => {
//             callback();
//         }, delay);
//     };
// }
//
// const expensiveOperation = () => console.log("Виконую складну операцію...");
// const debouncedExpensiveOperation = debounce(expensiveOperation, 1000);
//
// // Виклики функції
// debouncedExpensiveOperation();
// debouncedExpensiveOperation();
// debouncedExpensiveOperation();
// // Через 1 секунду після останнього виклику "Виконую складну операцію..." з’явиться в консолі тільки один раз.