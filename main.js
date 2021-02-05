'use strict'

let n = Math.floor(Math.random() * 100 + 1); // загадывается случайное число
//console.log("n = ", n);

let isNumber = function(x) {
    return !isNaN(parseFloat(x)) && isFinite(x);
};

let guessANum = function(){ 
    let num = prompt("Угадай число от 1 до 100");
    //console.log("num =", num);
    if (num === null) {
        alert("Игра окончена.");
    } else if (!isNumber(num)) {       // если введенное значение не является числом: 
        alert("Введите число!")
        guessANum();
    } else { 
        if (+num === n) {
            alert("Поздравляю, Вы угадали!!!");
        } else if (+num < n) {
            alert("Загаданное число больше.");
            guessANum();
        } else                                                                                                                                                                                                                                                                       {
            alert("Загаданное число меньше.");
            guessANum();
        } 
        // если нажата кнопка "Отмена"
    } 
}

guessANum();