// TASK: Даны инпуты. Переберите эти инпуты циклом и создайте коллекцию Map, ключами в которой будут инпуты,
// а значением - их порядковый номер на странице.
// Сделайте так, чтобы по клику на любой инпут ему в value записывался его порядковый номер.

'use strict'

let inputs_value = document.querySelectorAll('input');
let map = new Map;

let i = 1;
for (let elem of inputs_value) {
	map.set(elem, i++);
}

for (let elem of inputs_value) {
	elem.addEventListener('click', function() {
		this.value = this.value + map.get(this);
	});
}

