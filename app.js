// import functions and grab DOM elements
const formEl = document.querySelector('form');
const gobbieListEl = document.querySelector('.goblin-list');
const defeatedGobbiesEl = document.querySelector('.defeated-goblins');
const playerHPEl = document.querySelector('.player-hp');

// let state
let playerHP = 10;
let gobbiefolkDefeated = 0;
const gobbies = [
    { name: 'Uptalks', hp: 3 }, 
    { name: 'Longflops', hp: 1 }
];
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    // alert('submitted form test');
    formEl.reset();
});