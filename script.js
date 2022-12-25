'use strict';

//  select elements
const checkBtn = document.querySelector('.check');
const reset = document.querySelector('.again')
const message = document.querySelector('.message');
let number = document.querySelector('.number');
const score = document.querySelector('.score');
const high = document.querySelector('.highscore');
// generate random number
number = Math.trunc(Math.random() * 20) + 1
console.log(number)


let point = 20;

// event handling and implementing game logick on button click
checkBtn.addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    //  compare secret number to the users guess 
    if (!guess) {

        if (point >= 1) {
            message.textContent = "input a valid number"
            document.body.style.backgroundColor = 'red'
            score.textContent = point
            point = point - 1
        } else {
            message.textContent = "you,ve lost the game"
            document.body.style.backgroundColor = 'red'
            score.textContent = 0
        }
    }


    else if (guess < 0) {

        if (point >= 1) {
            message.textContent = "input number from 0-20 😒"
            score.textContent = point
            point = point - 1
            console.log(point)
        } else {
            message.textContent = "you,ve lost the game"
            document.body.style.backgroundColor = 'red'
            score.textContent = 0
        }
    }


    else if (guess === number) {
        message.textContent = 'congratulations you won 👌';
        document.querySelector('.number').textContent = number;

        if (point > high.textContent) {
            high.textContent = point + 1
        }
        document.querySelector('.number').style.width = '200px'
        document.body.style.backgroundColor = 'green'
    }

    else if (guess > number) {
        if (point >= 1) {
            message.textContent = 'guess is too high 🤣'
            score.textContent = point
            point = point - 1
        } else {
            message.textContent = "you've lost the game"
            document.body.style.backgroundColor = 'red'
            score.textContent = 0
        }
    }

    else if (guess < number) {
        if (point >= 1) {
            message.textContent = 'guess is too low 🤣'
            score.textContent = point
            point = point - 1;
        } else {
            message.textContent = "you've lost the game"
            document.body.style.backgroundColor = 'red'
            score.textContent = 0
        }
    }
})

reset.addEventListener('click', function () {
    message.textContent = "Start guessing..."
    score.textContent = 20;
    document.querySelector('.guess').value = ''
    point = 19;
    document.body.style.backgroundColor = 'rgb(60, 53, 126)'
    number = Math.trunc(Math.random() * 20) + 1;
    console.log(number)
    document.querySelector('.number').textContent = '?';

}) 