'use strict'

let tryAmount = 10,
    n = Math.floor(Math.random() * 100 + 1); // загадывается случайное число
    console.log("n = ", n);

let guessANum = function(){ 
    let answer;                             // переменная для получения ответа от confirm
    let isNumber = function(x) {            // проверка является ли введеное значение числом
        return !isNaN(parseFloat(x)) && isFinite(x);
    };

    if (tryAmount > 0) {                    //если количество попыток еще не закончилось
        let num = prompt("Угадай число от 1 до 100");
        //console.log("num =", num);
        if (num === null) {                 //если нажата кнопка "Отмена" ил клавиша "Esc"
            alert("Игра окончена.");
        } else if (!isNumber(num)) {       // если введенное значение не является числом
            alert("Введите число!");
            guessANum();
        } else {                            // если таки ввели число
            if (+num === n) {
                answer = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
                if (answer) {
                    tryAmount = 10;
                    n = Math.floor(Math.random() * 100 + 1);
                    guessANum();
                }
            } else if (+num < n) {
                tryAmount -= 1;             // уменьшаем количество попыток
                alert( `Загаданное число больше.\n Осталось попыток: ${tryAmount}`);
                guessANum();
            } else                                                                                                                                                                                                                                                                       {
                tryAmount -= 1;              // уменьшаем количество попыток
                alert( `Загаданное число меньше.\n Осталось попыток: ${tryAmount}`);
                guessANum();
            } 
        } 
    } else {
        answer = confirm("попытки закончились. Хотите сыграть еще?");
        //console.log(tryAmount, " хмхмхмхмхмх");
        if (answer) {
            tryAmount = 10;                 // если пользователь соглашается, игра начинается заново
            guessANum();
        }
    }
}

guessANum();