'use strict';

// The questions in the guessing game must require a mix of yes/no answers, and user input must accept either y/n or yes/no responses, with either .toUpperCase() or .toLowerCase() used to validate the user input and accommodate users entering all-caps Y/N or YES/NO answers, too.

var userName = prompt('What\'s your name?').toLowerCase();
document.getElementById('salutation').innerHTML = 'Hello ' + userName + ' !';
console.log('User\'s name is: ' + userName);


if (document.getElementById('aboutMe')) {

  var response1 = prompt('Can you guess what my favorite movies are? (Yes/No)').toLowerCase();
  console.log('Can the user guess my favorite movies: ' + response1);

  if (response1 === 'yes' || response1 === 'y') {
    alert('Yes, I love Fight Club, Trainspotting, Inglorious Basterds, and more!');
  } else if (response1 === 'no' || response1 === 'n'){
    alert('That\'s ok. You can learn what they are in a bit.');
  } else {
    alert ('Sorry, you gotta answer yes or no. \n You Lose :,-(');
  }

  var response2 = prompt('Can you guess what my favorite TV Shows are? (Yes/No)').toLowerCase();
  console.log('Can the user guess my favorite tv shows: ' + response2);

  if (response2 === 'yes' || response2 === 'y') {
    alert('Yes, I love It\'s Always Sunny in Philadelphia, Archer, Rick and Morty, and more!');
  } else if (response2 === 'no' || response2 === 'n'){
    alert('That\'s ok. You can learn what they are in a bit.');
  } else {
    alert ('Sorry, you gotta answer yes or no. \n You Lose :,-(');
  }

  var response3 = prompt('Can you guess what my favorite Books are? (Yes/No)').toLowerCase();
  console.log('Can the user guess my favorite books: ' + response3);

  if (response3 === 'yes' || response3 === 'y') {
    alert('Yes, I love The Lord of the Rings Trilogy, The Hobbit, and The Silmarillion, The Harry Potter Series, Ender\'s Game and Series, and more!');
  } else if (response3 === 'no' || response3 === 'n'){
    alert('That\'s ok. You can learn what they are in a bit.');
  } else {
    alert ('Sorry, you gotta answer yes or no. \n You Lose :,-(');
  }

  var response4 = prompt('Can you guess what my favorite random stuff/media are? (Yes/No)').toLowerCase();
  console.log('Can the user guess my favorite random stuff: ' + response4);

  if (response4 === 'yes' || response4 === 'y') {
    alert('Yes, I love Dungeons and Dragons (D&D) related things (i.e. books, blurbs, etc.), Critical Role -online D&D adventure (Twitch Show), Random/Useless information acquired by following "internet rabbit-holes", and more!');
  } else if (response4 === 'no' || response4 === 'n'){
    alert('That\'s ok. You can learn what they are in a bit.');
  } else {
    alert ('Sorry, you gotta answer yes or no. \n You Lose :,-(');
  }

  var response5 = prompt('Can you tell me what your favorite things are? (Yes/No)').toLowerCase();
  console.log('Can the user guess my favorite movies: ' + response5);

  if (response5 === 'yes' || response5 === 'y') {
    document.write(response5 + ' <--- Wow! These seem pretty cool!');
  } else if (response5 === 'no' || response5 === 'n'){
    document.write('That\'s ok, you don\'t wanna share, I understand.');
  } else {
    alert ('Sorry, you gotta answer yes or no. \n :-P');
  }

}
//Useful and descriptive console.log() messages in the JS are well written and correctly displaying to the browser console for each question of the guessing game.
