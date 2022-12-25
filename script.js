'use strict';

//  select elements
const checkBtn = document.querySelector('.check');
const message = document.querySelector('.message');
let number =document.querySelector('.number');

// generate random number
number = Math.trunc(Math.random() * 20)
console.log(number)


// event handling and implementing game logick on button click
checkBtn.addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    
//  compare secret number to the users guess 
    if (!guess) {
       message.textContent = "input a valid number"
       document.body.style.backgroundColor = 'red'
    } else if(guess < 0) {
        message.textContent = "input number from 0-20 😒"
    } else if(guess === number){
        message.textContent = 'congratulations you won 👌'
        document.body.style.backgroundColor = 'green'
    } else if (guess > number) {
        message.textContent = 'guess is too high 🤣'
    } else if ( guess < number) {
        message.textContent = 'guess is too low 🤣'
    }
})