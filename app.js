'use strict';

// The questions in the guessing game must require a mix of yes/no answers, and user input must accept either y/n or yes/no responses, with either .toUpperCase() or .toLowerCase() used to validate the user input and accommodate users entering all-caps Y/N or YES/NO answers, too.

// var userName = prompt('What\'s your name?').toLowerCase();
// document.getElementById('salutation').innerHTML = 'Hello ' + userName + ' !';
// console.log('User\'s name is: ' + userName);


if (document.getElementById('aboutme')) {

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

  var response6 = 0;
  var counter = 0;
  while (response6 !== 26 && counter < 4){
    response6 = parseInt(prompt('Q: In how many hours does a chicken lay one egg? \n Hint: It\'s less than 30!\nYou have 4 tries!'));
    console.log('userName thinks the answer is: ' + response6);
    counter += 1;
    if (response6 > 26){
      alert('Your number it greater than the answer!');
    } else if (response6 === 26) {
      alert('You\'re right, chickens take ' + response6 + ' hours to lay one egg!');
    } else if (isNaN(response6)) {
      alert('Hey! Don\'t be a smartass!');
    } else {
      alert('Your number is lesser than the answer!');
    }
  }
  if (response6 !== 26){
    alert('BTW chickens take 26 hours to lay one egg!');
  }
  //Question 7
  var countries = ['US', 'ENGLAND', 'FRANCE', 'BELGIUM', 'NETHERLAND', 'GERMANY','ITALY', 'HUNGARY', 'CZECH REPUBLIC', 'ISRAEL', 'CHINA', 'THAILAND', 'CAMBODIA', 'KOREA'];
  var responseCountries = 0;
  var responseCountriesTrue = true
  }
  }
  counter = 0;
  var tallyNum= 0;

  while(counter < 6){
    responseCountries = prompt('Can you guess the countries I have traveled to?\nTip: Use the correct names').toUpperCase();


    for (var i = 0; i < countries.length; i++) {

      if(responseCountries === countries[i]) {
        console.log(countries[i]);
        alert ('Hey, you guessed one! \nHere are the other places I have been: ' + countries);
        counter = 9;
        break;

      }


        counter += 1;

      }


    }
  }

//document.write ('A: The average hen lays one egg approximately every 26 hours, which is about 265 eggs per year.');
//Useful and descriptive console.log() messages in the JS are well written and correctly displaying to the browser console for each question of the guessing game.

// As a developer, I want to add a sixth question to my guessing game that takes numeric input by prompting a user to guess a number (for instance, "What is my favorite number?" or "How many Pokémon did I catch yesterday?"), and indicates to the user whether the guess is 'too high' or 'too low', and gives the user exactly four opportunities to get the correct answer, so that my fancy programming skills are showcased.
// As a developer, I want to add a seventh question to my guessing game that has multiple possible correct answers that are stored in an array. For instance, "Can you guess a state that I have lived in besides Washington?", so that even more of my programming skills are showcased. For now, I will structure this question so that the user has six tries to get a single correct answer, and upon using up those tries OR getting a correct answer, displays a message to the user indicating all of the possible correct answers.
// As a developer, I want to keep a tally of the total number of correct answers given by the user, and at the end of the game, tell the user how well they did with a personalized custom message that includes the number of correct answers and also addresses the user by name, e.g. "You got 4 out of 7 questions correct, Bobbi! Better luck next time."
