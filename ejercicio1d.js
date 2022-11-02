'use strict';

for (let i=1; i<1001; i++){
    const button = document.createElement('button');
    button.innerHTML = `${i} botón`;
    document.body.appendChild(button);
}