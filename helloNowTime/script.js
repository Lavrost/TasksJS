// TASK: Написать функцию, которой передаем имя, и она возраващает приветствие в зависимости от времени суток (Доброе утро\день\вечер\ночи Иван)

// Массив ключ - значеие с приветствием (Нужен для удобства)

const arrHello = new Map ([ 

    [0, 'Error'],
    [1,  'Доброе утро'],
    [2,    'Добрый день'],
    [3, 'Добрый вечер'],
    [4, 'Доброй ночи'],
    
]);

// Текущее время в часах
function nowTime() { 

    let nowTime = new Date;
    return nowTime.getHours();

}


// Передаем привет пользователю в зависимости от текущего времени
function getHello(hour) {

    if (10 >= hour && hour >= 4) {
        return 1;
    }
    if (16 >= hour && hour > 10) {
        return 2;
    }
    if (22 > hour && hour > 16) {
        return 3;
    }
    if (24 > hour && hour > 22 || 4 > hour && hour >= 0) {
        return 4;
    }
    else {
        return 0;
    }
    
}

// Выводим результат
function helloUser(name) {

    let indexOfHello = getHello(nowTime());
    let hello = arrHello.get(indexOfHello);
    // console.log(`${hello}, ${name}!`);

}
