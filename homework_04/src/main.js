let taskPart = +prompt(`Введіть число від 1 - 3, де
                                1 - перша частина домашного завдання
                                2 - друга частина домашного завдання
                                3 - третя частина частина домашного завдання`);

if (taskPart === 1) {
    /*
    * Вам необхідно написати програму, яка приймає на вхід число і виводить у консоль повідомлення у форматі:
    * Число N є простим числом, якщо число N просте, та Число N не є простим числом, якщо число N складене.
    * */

    /*
    * Прості числа — це натуральні числа, які мають лише два дільники: 1 і саме це число. Тобто просте число ділиться
    * без залишку тільки на 1 і на себе.
    *
    * Число 2 - єдиним парним простим числом
    * */

    let N = +prompt('Введіть число N');

    if (N > 1) {
        let isPrimeNumber = true;

        for (let i = 2; i < N; i++) {
            if (N % i === 0) {
                isPrimeNumber = false;
                break;
            }
        }
        if (isPrimeNumber) {
            console.log(`Число ${N} є простим`);
        } else {
            console.log(`Число ${N} не є простим`);
        }
    } else {
        console.log(`Число ${N} не є простим`);
    }
} else if (taskPart === 2) {
    /*
    * Вам необхідно написати програму, яка приймає на вхід число N і знаходить усі числа в діапазоні від 1 до N,
    * які є досконалими числами.
    * У теорії чисел досконале число  — натуральне число, що дорівнює сумі його додатних дільників,
    * не враховуючи самого числа. Наприклад, 6 має дільники 1, 2, 3 (не враховуючи його самого),
    * 6 = 1 + 2 + 3, тому 6 — досконале число.
    *
    * Інформація взята з ресурсу https://uk.wikipedia.org/wiki/%D0%94%D0%BE%D1%81%D0%BA%D0%BE%D0%BD%D0%B0%D0%BB%D0%B5_%D1%87%D0%B8%D1%81%D0%BB%D0%BE
    * */

    let N = +prompt('Введіть число N');

    for (let number = 1; number <= N; number++) {
        let divisorsSum = 0;

        for (let i = 1; i < number; i++) {
            if (number % i === 0) {
                divisorsSum += i;
            }
        }

        if (divisorsSum === number) {
            console.log(`Число ${number} є досконалим числом`);
        }
    }
} else if (taskPart === 3) {
    /*
    * Вам необхідно написати програму, яка приймає на вхід число, що буде висотою вершини вашої ялинки.
    * Уся ялинка має бути реалізована одним рядком
    * */

    let N = +prompt('Введіть число N');
    let tree = '';

    for (let i = 1; i <= N; i++) {
        for (let j = 0; j < N - i; j++) {
            tree += ' ';
        }
        for (let k = 0; k < 2 * i - 1; k++) {
            tree += '*';
        }
        tree += '\n';
    }

    console.log(tree);

} else {
    alert('Ви ввели не коректне число');
}
