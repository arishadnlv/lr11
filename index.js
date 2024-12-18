// Задачи 1-3 (4 балла)
async function task1() {
    console.log('Задача 1 начата');
    await delay(1000); // Имитация выполнения задачи, задержка 1 секунда
    console.log('Задача 1 завершена');
    return 'Результат задачи 1';
}

async function task2() {
    console.log('Задача 2 начата');
    await delay(1500); // Имитация выполнения задачи, задержка 1.5 секунды
    console.log('Задача 2 завершена');
    return 'Результат задачи 2';
}

async function task3() {
    console.log('Задача 3 начата');
    await delay(500);  // Имитация выполнения задачи, задержка 0.5 секунды
    console.log('Задача 3 завершена');
    return 'Результат задачи 3';
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


// Загрузка постов с JSONPlaceholder (2 балла)
async function fetchAndDisplayPostTitles() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('\nЗаголовки постов с JSONPlaceholder:');
        data.slice(0, 5).forEach(post => console.log(post.title)); // Отображаем только первые 5 заголовков
    } catch (error) {
        console.error('Ошибка при получении данных с JSONPlaceholder:', error);
    }
}


// Курсы валют (3 балла) -  БЕЗ  БЕЛАРУСЬБАНКА, т.к. публичного API нет!  Используем примерный JSON.
async function getExchangeRates() {
    try {
        const sampleData = [
            {"Cur_Abbreviation": "USD", "Cur_OfficialRate": 2.65},
            {"Cur_Abbreviation": "EUR", "Cur_OfficialRate": 2.9},
            {"Cur_Abbreviation": "RUB", "Cur_OfficialRate": 0.035}
        ];


        console.log('\nПримерные курсы валют (из примера JSON):');
        sampleData.forEach(rate => console.log(`${rate.Cur_Abbreviation}: ${rate.Cur_OfficialRate}`));
    } catch (error) {
        console.error('Ошибка при получении курсов валют:', error);
    }
}


async function runAllTasks() {
    const result1 = await task1();
    const result2 = await task2();
    const result3 = await task3();
    await fetchAndDisplayPostTitles();
    await getExchangeRates();
    console.log('\nВсе задачи завершены!');
    console.log('Результаты задач 1-3:', result1, result2, result3);
}

runAllTasks();