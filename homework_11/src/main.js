/*
* logArguments
Вам необхідно написати функцію-декоратор logArguments(fn), яка приймає на вхід функцію і додає можливість логувати всі
* аргументи, передані у функцію-аргумент.
*/

function sum(a, b) {
    return a + b;
}
function logArguments(fn) {
    return function(...args) {
        console.log('Аргументи:', ...args);
        return fn.apply(this, args);
    };
}

const loggedSum = logArguments(sum);

console.log(loggedSum(2, 3));

console.log('=================================================');

/*
validate
Вам необхідно написати функцію-декоратор validate(fn, validator),
яка приймає на вхід функцію і додає можливість* перевіряти аргументи,
передані у функцію fn, на відповідність заданому validator.
Якщо аргументи не проходять
перевірку, то декоратор має викидати виняток.
 */
const arr = [1, 2, 3, 4, 5, 6];
const multiplier = 'к';

function multiplyArray(inputArray, multiplier) {
    return inputArray.map((item) => item * multiplier);
}

function validateDecorator(fn, validator) {
    return function (inputArray, multiplier) {
        if (!validator(inputArray, multiplier)) {
            throw new Error('Некоректні вхідні дані');
        }
        return fn(inputArray, multiplier);
    };
}

function validator(inputArray, multiplier) {
    multiplier = multiplier * 1;
    if (typeof multiplier !== 'number' || isNaN(multiplier)) {
        console.log('Множник не є числом');
        return false;
    }

    for (const item of inputArray) {
        if (typeof item !== 'number' || isNaN(item)) {
            console.log(`Елемент масиву ${item} не є числом`);
            return false;
        }
    }
    return true;
}

const newFunc = validateDecorator(multiplyArray, validator);

try {
    console.log(newFunc(arr, multiplier));
} catch (error) {
    console.error(error.message);
}

console.log('===================');

/*
*retry
Вам необхідно написати функцію-декоратор retry(fn, maxAttempts), яка приймає на вхід функцію і додає можливість
* викликати функцію з максимальною кількістю спроб у разі помилки та повертає результат останнього виклику.
**/
function countFunction(attempt) {
    if (attempt === 1 || attempt === 2) {
        return true;
    } else if (attempt === 3) {
        return false;
    }
}

function retry(fn, maxAttempts) {
    const attempt = 4;
    const result = fn(attempt);

    if (result === true) {
        return `Результат спроби ${attempt}`;
    } else if (attempt > maxAttempts) {
        return lastResult;
    }

    lastResult = `Результат спроби ${attempt}`;
    return lastResult;
}

console.log(retry(countFunction, 4));


