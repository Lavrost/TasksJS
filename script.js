'use strict';


// TASK: Создать из массива объект Set
// TASK: Создать из объекта Set массив

let arrBase = [1, 2, 3, 1, 3, 4], 
    setFromArr = new Set(),
    arrFromSet = [];

for (let item of arrBase) {
    setFromArr.add(item);
}
 
arrFromSet = Array.from(setFromArr);

// console.log(setFromArr);
// console.log(arrFromSet);



//  TASK: Написать функцию, которая принимает строку (в этом тексте 3-5 предложений),
//  верните каждое первое слово в каждом предложении, через запятую.
// TODO: не возвращат из всех прелдложений

function substrSearch(mySubstr) {
    let stringLength = mySubstr.length,
    // while(indexDot !== undefined) {   // пока строка не закончится
        indexDot = mySubstr.indexOf('.'),
        sentence = mySubstr.slice(indexDot + 2),
        indexSpace = sentence.indexOf(` `);
    // console.log(stringLength);// Длина строки
    // console.log(indexDot); // Индекс первой точки
    // console.log(indexSpace); // Индекс первого пробела
    // console.log(sentence.slice(0, indexSpace));  // Первое слово после точки
    // console.log(sentence);  // Все, кроме первого предложения
    // }
}
substrSearch('В 1990-х годах число тяжких преступлений в США сократилось по ряду вполне понятных причин. Начал снижаться объем торговли крэком и кокаином,порождавшей высокий уровень насилия среди гангстеров и наркоторговцев. Экономический подъем привел к тому, что многие люди, которые в других обстоятельствах были бы втянуты в преступность, получили вместо этого легальную работу. А из-за общего старения населения стало меньше мужчин в возрасте от 18 до 24 лет, которые чаще всего прибегают к насилию. Тем не менее все это не снимает вопроса о том, почему сократился уровень преступности в Нью-Йорке.');




// TASK: Умножение

function multiplication(a, b) {
    return a*b;
}



// TASK: Написать функцию, которая принимает пол человека ('M','F') в виде строки,
// результат функции возвращает строку "Ваш пол мужской" (или женский) или же "Ваш пол не опеределен"

function yourGender(gender) {
    if (gender.toLowerCase() == 'm') {
        console.log('Men');
    }
    else if (gender.toLowerCase() == 'f') {
        console.log('Women');
    }
    else {
        console.log('What are you?');
    }
}



// TASK: Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

const days = new Map([
    [1, 'Понедельник'],
    [2, 'Вторник'],
    [3, 'Среда'],
    [4, 'Четверг'],
    [5, 'Пятница'],
    [6, 'Суббота'],
    [7, 'Воскресенье']
]);

function todayIs(day_number) {
    if (days.get(day_number) == undefined) {
        console.log('Некорректн данные при вводе!');
    }
    else {
        console.log('Сегодня ', `${days.get(day_number).toLowerCase()}!`); 
    }
}

// Через input вводим номер сегодняшнего дня today 
// todayIs(today);


// TASK: Вывести числа от 1 до 100 в столбец. К каждой цифре подписать состояние возраста
// (1-17 ребенок, 18-30 - молодой, 30-55 - зрелый, от 55 - старый). Например. 33 - зрелый

// TODO: Я добавил: вводишь возраст и программа говорит какой ты(молодой, зрелый, старый),
// вопрос в том, как сделать вызов этой ф-ии, где она будет, можно просто еще одну отдельно независимо от всего другого

function isAge() { //TODO: rename
    const yourAge = ['молодой', 'зрелый', 'старый']; //TODO: rename
    let yungOrOld = yourAge[0]; //TODO: rename(yourAgeState )
    for (let i=1; i<100; i++) {
        if(i>30 && i<56) { yungOrOld = yourAge[1];}
        if(i>=56) { yungOrOld = yourAge[2];}
        console.log(i, ` ${yungOrOld}`);
    }
}

// isAge();



// TASK: Напишите ф-ию, которая удаляет все '!'(сделал, что удалит любой, по желанию юзера)

function createNewStringWithoutChar(str, char_name) {
    const regexp = new RegExp (`${char_name}`, 'g');
    return str.replace(regexp, '');
}

// const my_str = '!Hel!lo!';
// console.log(createNewStringWithoutChar(my_str, '!'));



// TASK: вывести приветствие, в зависимости от роли юзера

function greet(name_user, name_owner) {
    return name_user == name_owner ? 'Hello, owner!' : 'Hello, user!';
}

// console.log(greet('a', 'b'));



// TASK: пеердается массив(['3', 5, 7, '9', 5]) - посчитать сумму чисел

function sumMix(arr_num) {
    let sum = 0;
    for (let i = 0; i < arr_num.length; i++) {
        sum += Number(arr_num[i]);
    }
    return sum;
}

// console.log(sumMix([1, 2, '5']));



// TASK: найти сумму чисел от 1 до N

function summation(number) {
    if (number !== 1) 
        return number += summation(number-1);
    else 
        return number;
}

// console.log(summation(4));



// TASK: Сделайте функцию, которая принимает массив любых целых чисел, которая возращает истинну,
//       если все элементы четные, если бы хотя бы один элемент не четный, то false.

function haveAnEvenNumber(arr_num) {
    let isEven = true;

    arr_num.forEach(item => {
        if (item % 2 !== 0) {
            isEven = false;
            return isEven;
        }
    });

    return isEven;
}

//  let result = haveAnEvenNumber([0, -2, 2, 4, 4, 44]);
// console.log(result);



// TASK: Сделай функцию, которая принимает массив любых целых чисел, которая возращает новый массив,
//  где все элементы кратны пяти. ([1,2,5,12,15,21] вернет [5,15])

function numbersMultiplicityFive(arr_num) {
    let new_arr = [];

    arr_num.forEach(item => {
        if (item % 5 === 0 && item !== 0) { // можно и на < 0 проверить при необходимости, а можно это в другой ф-ии сделать
            new_arr.push(item);
        }
    });
    return new_arr;
}   

// let result = numbersMultiplicityFive([0, 5, 4, 13, 18, 105, 37, 45, 25]);
// console.log(result);



// TASK: Написать функцию, которая принимает массив чисел, например [1,2,3,4,5]
// и функция возращает среднее арифметическое, (округлить результат до десятых)

function arithmeticAverage (arr_num) {
    let sum = 0,
        count = 0;

    arr_num.forEach(item => {
        sum += item;
        count++;
    });
    console.log(sum);
    console.log(count);
    return Math.round(sum/count * 100) / 100;
}

// let result = arithmeticAverage([0, 5, 2]);
// console.log(result);



// TASK: Написать функцию, которая принимает массив чисел, например [1,2,3,4,5], и переносит первый элемент массива в конец

function pushElementToEnd(arr) {
    arr[arr.length] = arr[0];
    arr.shift();
    return arr;
}

// let result = pushElementToEnd([1, 5, 2]);
// console.log(result);



// TASK: Написать функцию, которая принимает массив сотрудников, каждый сотрудник
// имеет имя и возраст ([{name: 'Иван', age: 23},...]) и возвращает массив,
// где каждый элемент представляет из себя строку "Имя: Иван, возвраст: 23"

function restructArr(arr_obj) { // TODO: rename
    let arr_res = [],
        count = 0;
    arr_obj.forEach(item => {
        arr_res[count] = `Имя: ${item.name}, возраст: ${item.age}`; // логичнее было бы сделать новый объект с просто переименованными свойствами(name => 'Имя'), но не вижу смысла, что в той, что в этой задачи
        count++;
    });
    return arr_res;
}

// То же самое, но с ЗАМЫКАНИЕМ!!!
function restructArrСlosure(arr_obj) { // TODO: rename;
        let arr_res = [],
            count = 0;
        return function() {
            arr_obj.forEach(item => {
                arr_res[count] = `Имя: ${item.name}, возраст: ${item.age}`; // логичнее было бы сделать новый объект с просто переименованными свойствами(name => 'Имя'), но не вижу смысла, что в той, что в этой задачи
                count++;
            });
            return arr_res;
        }
    }

// let my_arr = [
//     {
//         name: 'Иван',
//         age: 23
//     },
//     {
//         name: 'Алексей',
//         age: 44
//     }
// ];
// let result = restructArrСlosure(my_arr);
// console.log(result());



// TASK: У нас есть объект, в котором хранятся зарплаты нашей команды,
// напишите код для суммирования всех зарплат и сохраните результат

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
    Vasya: 80,
    Rostislav: 200
}

function sum_salary(obj) {
    let sum = 0;
    for(let cost in obj) {
        sum += obj[cost];
    }
    return sum;
}

// console.log(sum_salary(salaries));



// TASK: Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

function multiplyNumeric(obj) {
    for(let key in obj) {
        if(typeof(obj[key]) === 'number') {
            console.log(1);
            obj[key] *= 2;
        }
    }
    console.log('end');
    return obj;
}

let my_obj = {
    name: 'Maksim',
    age: 25,
    sum: 2
}

// let result = multiplyNumeric(my_obj);
// console.log(result);



// TASK: Написать объект ladder - объект, который позволяет подниматься вверх и спускаться

let ladder = {
    step: 0,

    min_step: 0, // самая нижняя ступенька
    max_step: 10,

    index_down: 0, // когда длинный вызов методов, будет легко понять где метод down не сработал
    index_up: 0, // то же что и для down

    showStep: function() {
        console.log(this.step);
    },

    up: function() { 
        this.index_up++;
        if(this.step < this.max_step) {
            this.step++;
        }
        else {
            console.log(`Выше нельзя! ${this.index_up} вызов метода up`);
        }
    },

    down: function() {
        this.index_down++;
        if(this.step > this.min_step) {
            this.step--;            
        } 
        else {
            console.log(`Ниже нельзя! ${this.index_down} вызов метода down`);
        }
    }
}

// ladder.up(); 
// ladder.up(); 
// ladder.up(); 
// ladder.down();
// ladder.down();
// ladder.down();
// ladder.showStep();



//  TASK: Реализуйте класс MyString, который будет иметь следующие методы: 
//    метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде,
//    метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной
//    и метод ucWords(), который принимает строку и делает заглавной первую букву каждого слова этой строки.

// let str = "myStr mySecondStr1 lector abred",
//     str2 = ' a b c';


// Посимвольно переносим в массив сразу в правильном порядке, потом переводим в строку
function reverse(str) {
    let centerOfStr = Math.floor(str.length/2), // Центр строки
        isEvenStr = str.length%2 === 0 ? true : false, // Четное число символов или нет
        arr_new_str = [], // Результирующий массив
        index_start = 0,
        index_end = str.length-1; // Индексы символа массива

    for(let i=0; i<=centerOfStr; i++) { // Вторую половину сиимволов помещаем в начало
        arr_new_str[index_end] = str[i];
        index_end--;
    }
    for(let i=str.length-1; i>centerOfStr; i--) { // Первую половину символов строки помещаем в конец
        arr_new_str[index_start] = str[i];
        index_start++;
    }
    if (isEvenStr) { // центральный элемент не забываем
        arr_new_str[index_start+1] = str[centerOfStr-1]; // Можно сделать отдельную ф-ию
    }

    return arr_new_str.join('');
    // console.log(arr_new_str);
    // console.log(isEvenStr);
    // console.log(str.length);
    // console.log(centerOfStr);
}

function ucFirst(str) { // Первая буква строки - заглавная
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function ucWords(str) { // Каждое слово в строке с заглавной

    let strInArr = str.split(' ');

    for(let i=0; i<strInArr.length; i++) {
        strInArr[i] = strInArr[i].charAt(0).toUpperCase() + strInArr[i].slice(1);
    }

    return strInArr.join(' ');
}


// console.log(ucWords(str));
 


class MyString {
    constructor(str) {
        this.str = str;
    }

    test() {
        return this.str+'a';
    }

    reverse() {
        let centerOfStr = Math.floor(this.str.length/2), // Центр строки
            isEvenStr = this.str.length%2 === 0 ? true : false, // Четное число символов или нет
            arr_new_str = [], // Результирующий массив
            index_start = 0,
            index_end = this.str.length-1; // Индексы символа массива
    
        for(let i=0; i<=centerOfStr; i++) { // Вторую половину сиимволов помещаем в начало
            arr_new_str[index_end] = this.str[i];
            index_end--;
        }
        for(let i=this.str.length-1; i>centerOfStr; i--) { // Первую половину символов строки помещаем в конец
            arr_new_str[index_start] = this.str[i];
            index_start++;
        }
        if (isEvenStr) { // центральный элемент не забываем
            arr_new_str[index_start+1] = str[centerOfStr-1]; // Можно сделать отдельную ф-ию
        }
    
        return arr_new_str.join('');
        // console.log(arr_new_str);
        // console.log(isEvenStr);
        // console.log(str.length);
        // console.log(centerOfStr);
    }

    ucFirst() { // Первая буква строки - заглавная
        return this.str.charAt(0).toUpperCase() + this.str.slice(1);
    }

    ucWords() { // Каждое слово в строке с заглавной

        let strInArr = this.str.split(' ');
    
        for(let i=0; i<strInArr.length; i++) {
            strInArr[i] = strInArr[i].charAt(0).toUpperCase() + strInArr[i].slice(1);
        }
    
        return strInArr.join(' ');
    }
}

let stringFirst = new MyString('test1 test1');

console.log(stringFirst.ucWords());