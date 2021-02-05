'use strict'

let n = 17;

let guessANum = function(){ 
    let num = prompt("Угадай число от 1 до 100");
    //console.log("num: ",num,  "тип: ", typeof num);
    if (+num === n) {
        alert("Поздравляю, Вы угадали!!!")
    } else if (num === null) {
        alert("Игра окончена.");
    } else if (num === "" || isNaN(num)){
        alert("Введите число!")
        guessANum();
    } else if (+num < n) {
        alert("Загаданное число больше.");
        guessANum();
    } else {
        alert("Загаданное число меньше.");
        guessANum();
    }
}

guessANum();