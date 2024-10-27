/*
* Вам необхідно написати функцію summarize(num), яка приймає на вхід число і повертає функцію, яка під час виклику додає
* це число до аргументу і повертає результат. Якщо аргумент не передано, то додається одиниця. Наприклад, якщо функція
* викликається з аргументом 5, то функція, що повертається, повинна при виклику з аргументом 3 повернути 8
* (тому що 3 + 5 = 8) або 6, якщо аргумент не буде передано.
* */

function summarize(num) {
    return function(arg) {
        return (arg !== undefined ? arg : 1) + num;
    };
}

const addFive = summarize(4);
console.log(addFive(3));
console.log(addFive());
console.log('=================================================');

/*
* Вам необхідно написати функцію counter(startValue, step), яка приймає на вхід два параметри - стартове значення
* лічильника і його крок. Функція повертає нову функцію, яка при кожному виклику збільшує лічильник на значення і
* повертає його поточне значення. Лічильник повинен мати методи increment, decrement і reset, які збільшують або
* зменшують значення на step і скидають значення до стартового, відповідно.
* */

function counter(startValue, step) {
    let currentValue = startValue;

    return {
        increment: function() {
            currentValue += step;
            return currentValue;
        },
        decrement: function() {
            currentValue -= step;
            return currentValue;
        },
        reset: function() {
            currentValue = startValue;
            return currentValue;
        },
        getValue: function() {
            return currentValue; // Додатковий метод для отримання поточного значення
        }
    };
}

// Приклад використання
const newCounter = counter(10, 2);

console.log(newCounter.increment());
console.log(newCounter.increment());
console.log(newCounter.decrement());
console.log(newCounter.reset());
console.log(newCounter.getValue());
console.log('=============================================');

/*
* Вам необхідно написати функцію sequence(fn, fn), яка приймає на вхід дві або більше функції і повертає нову функцію,
* яка викликає їх послідовно з результатом попереднього виклику. Результат останньої функції має бути повернутий новою
* функцією. Кожна функція повинна мати доступ до результату попередньої функції через замикання.
* */

const add = (x) => x + 1;
const multiply = (x) => x * 2;
const subtract = (x) => x - 3;
function sequence(...fns) {
    return function(initialValue) {
        return fns.reduce((accumulator, currentFunction) => {
            return currentFunction(accumulator);
        }, initialValue);
        // consle.log('test');
    };
}
// console.log(sequence(add, multiply, subtract));

const combinedFunction = sequence(add, multiply, subtract);
const result = combinedFunction(7);
console.log(result);

