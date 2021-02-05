'use strict'

let n = Math.floor(Math.random() * 100 + 1); // загадывается случайное число
//console.log("n = ", n);

let guessANum = function(){ 
    let num = prompt("Угадай число от 1 до 100");
    //console.log("num =", num);

    // Создаем замыкание
    let isNumber = function(x) {
        return !isNaN(parseFloat(x)) && isFinite(x);
    };

    if (num === null) {                 //нажата кнопка "Отмена" ил клавиша "Esc"
        alert("Игра окончена.");
    } else if (!isNumber(num)) {       // если введенное значение не является числом
        alert("Введите число!");
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
    } 
}

guessANum();