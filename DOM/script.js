'use strict';


window.onload = () => {
    let btnCheckTaskOne = document.querySelector('#TASK__isValueInput--btn'),
        inputTaskOne = document.querySelector('#TASK__isValueInput--input'),

        btnSwapTaskTwo = document.querySelector('#TASK__swapPlaces--btn'),
        inputLeftTaskTwo = document.querySelector('#TASK__swapPlaces--input_left'),
        inputRightTaskTwo = document.querySelector('#TASK__swapPlaces--input_right'),

        divCheckResult  = document.querySelector('.result'); // Для наглядности

    // TASK_ONE: Выводим кнопку и инпут, в инпуте можно ввести любой текст и при нажатии на кнопку,
    // выводится алерт с текстом "Вы ввели 'текст инпута'" или "Вы ничего не ввели в поле".
    btnCheckTaskOne.onclick = function () {
        divCheckResult.innerHTML = inputTaskOne.value;
        if (inputTaskOne.value.trim() != '') {
        alert(`Вы ввели "${inputTaskOne.value.trimStart().trimEnd()}" 🎉`);
        }   else {
            alert("Вы ничего не ввели 😔");
        }
    };

    // TASK_TWO: Выводим кнопку с текстом "Поменять" и два инпута, при клике на кнопку инпуты
    // меняются своим введеным текстом
    btnSwapTaskTwo.onclick = function () {
        let tmp = inputLeftTaskTwo.value;

        inputLeftTaskTwo.value = inputRightTaskTwo.value;
        inputRightTaskTwo.value = tmp;
    }
}


