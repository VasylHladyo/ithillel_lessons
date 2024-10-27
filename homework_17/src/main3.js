/*
* intervalRac.Створіть функцію intervalRace, яка прийматиме масив функцій та інтервал часу t у мілісекундах. Функція
* intervalRace має викликати кожну функцію з масиву по черзі через заданий інтервал часу t. Коли всі функції виконано,
* intervalRace має повернути масив із результатами.
* */
function intervalRace(functions, t, callback) {
    const results = [];
    let currentIndex = 0;
    const intervalId = setInterval(() => {
        const func = functions[currentIndex];
        results.push(func());
        currentIndex++;

        if (currentIndex === functions.length) {
            clearInterval(intervalId);
            callback(results);
        }
    }, t);
}

const func1 = () => "Result 1";
const func2 = () => "Result 2";
const func3 = () => "Result 3";

intervalRace([func1, func2, func3], 1000, (results) => {
    console.log("Результати:", results);
});

