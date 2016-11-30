'use strict';

// The questions in the guessing game must require a mix of yes/no answers, and user input must accept either y/n or yes/no responses, with either .toUpperCase() or .toLowerCase() used to validate the user input and accommodate users entering all-caps Y/N or YES/NO answers, too.

var userName = prompt('What\'s your name?').toLowerCase();
document.getElementById('salutation').innerHTML = 'Hello ' + userName + ' !';

var response1 = prompt('What\'s your name?').toLowerCase();

if (response1 === 'yes' || response1 === 'y') {
  alert('Yes, Sam does have three cats!');
} else if (response1 === 'no' || response1 === 'n'){
  alert('Sorry, you\'re wrong, Sam has three cats');
} else {
  alert ('You fail to understand yes/no questions so that is as good as wrong. <br/> You Lose!');
}

//Useful and descriptive console.log() messages in the JS are well written and correctly displaying to the browser console for each question of the guessing game.
