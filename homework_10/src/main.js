/*
* Вам необхідно реалізувати функцію memoize(fn), яка приймає вхід функцію і додає їй можливість кешування результатів
* виконання, щоб уникнути повторних обчислень. Це означає, що в разі, коли функція викликається з однаковими параметрами,
* то результат необхідно брати з кешу. (Тільки примітиви у параметрах та використовуйте Map)
* */

function memoize(fn) {
    let cache = new Map();

    return function(...args) {
        let currentCache = cache;

        for (let arg of args) {
            if (!currentCache.has(arg)) {
                currentCache.set(arg, new Map());
            }
            currentCache = currentCache.get(arg);
        }

        if (currentCache.has('result')) {
            return currentCache.get('result');
        }
        let result = fn(...args);
        currentCache.set('result', result);
        return result;
    };
}

let multiply = function(a, b) {
    return a * b;
};
let memoizedMultiply = memoize(multiply);

console.log(memoizedMultiply(2, 3));
console.log(memoizedMultiply(2, 3));

console.log('==================================================');

/*
* Встановіть обмеження на розмір кеша у вигляді числа N. Якщо це значення перевищено, то вам необхідно перезаписати
* перше значення, потім друге і так далі.
* */

function memoize(fn, cacheLimit) {
    let cache = new Map();
    let keysQueue = [];

    return function(...args) {
        let currentCache = cache;
        let path = [];

        for (let arg of args) {
            path.push(arg);
            if (!currentCache.has(arg)) {
                currentCache.set(arg, new Map());
            }
            currentCache = currentCache.get(arg);
        }

        if (currentCache.has('result')) {
            return currentCache.get('result');
        }

        let result = fn(...args);
        currentCache.set('result', result);
        keysQueue.push(path);

        if (keysQueue.length > cacheLimit) {
            let oldestPath = keysQueue.shift();
            let oldestCache = cache;

            for (let i = 0; i < oldestPath.length; i++) {
                let key = oldestPath[i];
                if (i === oldestPath.length - 1) {
                    oldestCache.delete(key);
                } else {
                    oldestCache = oldestCache.get(key);
                }
            }
        }

        return result;
    };
}

let multiply2 = function(a, b) {
    return a * b;
};

let memoizedMultiply2 = memoize(multiply2, 3);

console.log(memoizedMultiply2(2, 3));
console.log(memoizedMultiply2(2, 3));
console.log(memoizedMultiply2(3, 4));
console.log(memoizedMultiply2(4, 5));
console.log(memoizedMultiply2(5, 6));
console.log(memoizedMultiply2(2, 3));
console.log('==================================================');


/*
* Додайте перевірку, щоб прибрати дублікати результатів із кешу.
* */

function memoize(fn, cacheLimit) {
    let cache = new Map();
    let keysQueue = [];

    return function(...args) {
        let currentCache = cache;
        let path = [];

        for (let arg of args) {
            path.push(arg);
            if (!currentCache.has(arg)) {
                currentCache.set(arg, new Map());
            }
            currentCache = currentCache.get(arg);
        }

        if (currentCache.has('result')) {
            return currentCache.get('result');
        }

        let result = fn(...args);
        currentCache.set('result', result);

        // Перевірка на дублікат у keysQueue
        if (!keysQueue.some(keyPath => keyPath.toString() === path.toString())) {
            keysQueue.push(path);
        }

        if (keysQueue.length > cacheLimit) {
            let oldestPath = keysQueue.shift();
            let oldestCache = cache;

            for (let i = 0; i < oldestPath.length; i++) {
                let key = oldestPath[i];
                if (i === oldestPath.length - 1) {
                    oldestCache.delete(key);
                } else {
                    oldestCache = oldestCache.get(key);
                }
            }
        }

        return result;
    };
}

let multiply3 = function(a, b) {
    return a * b;
};

let memoizedMultiply3 = memoize(multiply3, 3);

console.log(memoizedMultiply3(2, 3));
console.log(memoizedMultiply3(2, 3));
console.log(memoizedMultiply3(3, 4));
console.log(memoizedMultiply3(4, 5));
console.log(memoizedMultiply3(5, 6));
console.log(memoizedMultiply3(2, 3));



