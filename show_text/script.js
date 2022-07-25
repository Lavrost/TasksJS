
'use strict'

const btn = document.querySelector('.show_text'),
    text = document.querySelector('.text');

btn.onclick = function() {
    text.classList.toggle('hide');
}