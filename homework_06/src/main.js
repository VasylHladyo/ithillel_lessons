/*
* Вам необхідно написати функцію doubleLetter(str), яка приймає на вхід рядок і повертає новий рядок, у якому кожен
* символ повторюється двічі hello ⇒ hheelllloo.
*
* Інформацію по методу charAt() знайшов на ресурсі:
* https://xn--80adth0aefm3i.xn--j1amh/string.charat
* */

function doubleLetter(str) {
    let doubleStr = '';
    for (let i = 0; i < str.length; i++) {
        doubleStr += str.charAt(i) + str.charAt(i);
    }
    return doubleStr;
}
console.log(doubleLetter("Hello1"));
/*
* Також дане завдання можна виконати по зразку одного з попередніх завдань
* */
function doubleLetter1(str) {
    let doubleStr = '';
    for (let i = 0; i < str.length; i++) {
        doubleStr += str[i] + str[i];
    }
    return doubleStr;
}
console.log(doubleLetter1("Hello2"));


/*
* Вам необхідно написати функцію padString(str, length, symbol, toLeft), яка приймає на вхід рядок, число, що є довгим
* рядком, який ми хочемо отримати в результаті та символ, яким доповниться рядок, якщо це буде потрібно, четвертим
* параметром є буремний «прапор», чи додавати символи зліва або справа(за замовчуванням).
* Якщо 2 параметр менше, ніж довжина вихідного рядка, то виводимо вихідний рядок без змін. Приклад виклику:
* padString('Ivan', 6, '*') // 'Ivan**'
* */

function padString(str, length, symbol, toLeft = false) {
    if (toLeft) {
        return str.padStart(length, symbol);
    } else {
        return str.padEnd(length, symbol);
    }
}

console.log(padString('Vasyl', 4, '*'));

/*
* Вам необхідно написати функцію camelCase(str, separator), яка приймає на вхід рядок і перетворює його до формату camelCase.
* Опис методів split() та slice() також знайшов на ресурсі:
* https://xn--80adth0aefm3i.xn--j1amh/string.slice
* https://xn--80adth0aefm3i.xn--j1amh/string.split
* */

function camelCase(str, separator) {
    let newStr = '';
    let toLowerCase = str.toLowerCase();
    let word = toLowerCase.split(separator);
    if (word.length === 1) {
        return str;
    }
    for(i = 0; i <= word.length-1; i++) {
        if ( i === 0) {
            newStr += word[i];
        } else {
            newStr += word[i].charAt(0).toUpperCase() + word[i].slice(1);
        }
    }
    return newStr;
}
console.log(camelCase('Hello!_word', '_'))