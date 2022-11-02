'use strict';

const button = document.createElement('button');
button.innerHTML = '1 botón';
document.body.appendChild(button);

button.onmouseenter = function () {
    button.innerHTML = '1 botóN';
}

button.onmouseleave = function () {
    button.innerHTML = '1 botón'
}