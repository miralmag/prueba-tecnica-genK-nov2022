'use strict';

const array1 = [
    [1, 3, 5],
    [7, 9, 7],
    [5, 3, 1],
];

const array2 = [
    [2, 4, 6],
    [8, 10, 8],
    [6, 4, 2],
    ];

const result = [];

const flat1 = array1.flat();
let flat2 = [];

for (let i=0; i<array2.length; i++){
    for(let j= 0; j<array2[i].length; j++){
    flat2.push(array2[j][i])
    }
}


for (let i = 0; i<flat1.length; i++){
    result[i] = flat1[i] * flat2[i]
}


//Convierte el array result en un array de strings con números de 3 cifras y completando con ceros a la izquierda los números que tengan menos de 3 cifras

const newArray = result.map((number) => {
    if(number.length >= 3) {
    return number.toString();
    } else {
        return number.toString().padStart(3, '0');
    }
});

