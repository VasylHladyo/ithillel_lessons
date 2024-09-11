/*
* Вам необхідно написати функцію reverseString(str), яка приймає на вхід рядок і повертає його у зворотному порядку.
* */

function reverseString(str) {
    let reverseStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    }
    return reverseStr;
}

console.log(reverseString("Hello! Im Vasyl"));


/*
* Вам необхідно написати функцію isPalindrome(str), яка приймає на вхід рядок і перевіряє, чи є введений рядок паліндромом.
* */

function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    for (; left < right; left++, right--) {
        while (left < right && str[left] === ' ') {
            left++;
        }
        while (left < right && str[right] === ' ') {
            right--;
        }

        if (str[left] !== str[right]) {
            return false;
        }
    }

    return true;
}

console.log(isPalindrome("a man a plan a canal panama"));
console.log(isPalindrome("hello"));

/*
* Вам необхідно написати функцію findGCD(a, b), яка приймає на вхід два числа і повертає їхній НСД.
*
* Спосіб вирішення задачі знайшов на ось цьому ресурсі:
* https://stackoverflow.com/questions/17445231/js-how-to-find-the-greatest-common-divisor
*
* Якщо правильно зрозумів, то для вирішення такої задачі використовується Алгоритм Евкліда.
* Наскільки я зрозумів, важливим є момент коли b === 0. Тому я трохи модифікував відповідь, яка була представлена на форумі.
* Також пошукав інформацію стосовно рекурсії. І наскільки я зрозумів, Рекурсія — це метод програмування,
* при якому функція викликає сама себе.
* */

function findGCD(a, b) {
    if (b === 0) {
        return a;
    }
    return findGCD(b, a % b);
}

console.log(findGCD(12, 0))
console.log(findGCD(48, 42))

