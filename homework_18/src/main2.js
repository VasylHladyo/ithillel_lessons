/*
* concurrentPromises.Створіть функцію concurrentPromises, яка приймає масив промісів і максимальну кількість промісів,
* що виконуються одночасно. Функція має виконати проміси паралельно, але не більше зазначеної максимальної кількості.
* Результатом функції має бути масив результатів промісів.
* */

//Тут я скористався допомогою chatgpt правда трохи модифікував йього

async function concurrentPromises(promises, maxConcurrent) {
    const results = new Array(promises.length);
    let activePromises = 0;
    let currentIndex = 0;

    const executeNext = async () => {
        while (currentIndex < promises.length && activePromises < maxConcurrent) {
            const index = currentIndex;
            const promise = promises[currentIndex];
            activePromises++;
            currentIndex++;

            try {
                const result = await promise;
                results[index] = result;
                console.log(`Promise ${index + 1} completed with result: ${result}`);
            } catch (error) {
                results[index] = null;
                console.error(`Promise ${index + 1} failed:`, error);
            } finally {
                activePromises--;
                executeNext();
            }
        }
        if (currentIndex === promises.length && activePromises === 0) {
            return results;
        }
    };

    await executeNext();
    return results;
}

concurrentPromises([
    new Promise(resolve => setTimeout(() => resolve(1 + 2), 1000)),
    new Promise(resolve => setTimeout(() => resolve(3 + 4), 500)),
    new Promise(resolve => setTimeout(() => resolve(5 + 6), 800))
], 2).then(results => {
    console.log("Всі результати:", results);
});







