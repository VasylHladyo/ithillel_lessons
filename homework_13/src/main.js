/*
* Напишіть функцію, яка рекурсивно обчислює n-те число Фібоначчі. Числа Фібоначчі визначаються як послідовність, у якій
* кожне число дорівнює сумі двох попередніх чисел (наприклад, 0, 1, 1, 2, 3, 5, 8 і так далі).
* Використовуйте рекурсію для обчислення чисел Фібоначчі.
* */
const n = 6;
function fibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
console.log(fibonacci(n));
console.log('==================================');

/*
* Попрацюємо з числовим паліндромом. Числовий паліндром — це натуральне число, яке читається зліва направо і справа
* наліво однаково. Інакше кажучи, відрізняється симетрією запису (розташування цифр), причому число знаків може бути
* як парним, так і непарним. Але. Паліндром можна отримати як результат операцій над іншими числами. Візьмемо будь-яке
* натуральне число і складемо його зі зворотним числом, тобто записаним тими самими цифрами, але у зворотному порядку.
* Проробимо ту саму дію з сумою, що вийшла, і будемо повторювати її доти, доки не утвориться паліндром. Іноді достатньо
* зробити всього один крок (наприклад, 312 + 213 = 525), але, як правило, потрібно не менше двох. Скажімо, число 96
* породжує паліндром 4884 тільки на четвертому кроці.... Вам потрібно написати функцію, яка повертатиме об'єкт, де буде
* властивість result і це буде паліндром, і властивість steps — це число викликів до знаходження паліндрома. Для того,
* щоб перевірити себе використовуйте число 196. Це так зване Lychrel number — число яке немає поліндрому
* */

function isPalindrome(num) {
    const strNum = num.toString();
    return strNum === strNum.split('').reverse().join('');
}

function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''), 10);
}

function findPalindrome(num) {
    let steps = 0;
    let currentNum = num;
    const maxSteps = 1000;

    while (!isPalindrome(currentNum) && steps < maxSteps) {
        const reversedNum = reverseNumber(currentNum);
        currentNum += reversedNum;
        steps++;
    }

    return {
        result: isPalindrome(currentNum) ? currentNum : null,
        steps: steps,
        isLychrel: steps === maxSteps && !isPalindrome(currentNum)
    };
}

const inputNumber = 196;
const result = findPalindrome(inputNumber);
if (result.result) {
    console.log(`Паліндром: ${result.result}, Кроки: ${result.steps}`);
} else {
    console.log(`Не вдалося знайти паліндром. Кроки: ${result.steps}`);
}
console.log('========================================');

/*
* Напишіть функцію, яка приймає масив унікальних елементів і генерує всі можливі перестановки цього масиву.
* Використовуйте рекурсію для знаходження всіх перестановок. Наприклад, якщо вхідний масив [1, 2, 3], функція має
* повернути масив, що містить [1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [2, 3, 1], [3, 1, 2] і [3, 2, 1].
* */

function generatePermutations(arr) {
    const result = [];

    function permute(current, remaining) {
        if (remaining.length === 0) {
            result.push(current);
        } else {
            for (let i = 0; i < remaining.length; i++) {
                const newCurrent = [...current, remaining[i]];
                const newRemaining = remaining.filter((_, index) => index !== i);
                permute(newCurrent, newRemaining);
            }
        }
    }

    permute([], arr);
    return result;
}

const inputArray = [1, 2, 3, 4];
const permutations = generatePermutations(inputArray);
console.log(permutations);


