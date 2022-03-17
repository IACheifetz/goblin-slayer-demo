// import functions and grab DOM elements
import { renderGobbieEl } from './render-utils.js';
const formEl = document.querySelector('form');
const gobbieListEl = document.querySelector('.goblin-list');
const defeatedGobbiesEl = document.querySelector('.defeated-goblins');
const playerHPEl = document.querySelector('.player-hp');

// let state
let playerHP = 10;
let gobbiefolkDefeated = 0;
const gobbies = [
    { name: 'Uptalks', hp: 3 }, 
    { name: 'Longflops', hp: 2 }
];

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    // alert('submitted form test');

    const data = new FormData(formEl);

    const newGobbie = {
        name: data.get('gobbie-name'),
        hp: Math.ceil(Math.random() * 6),
    };

    gobbies.unshift(newGobbie);

    displayGobbies();

    formEl.reset();
});

displayGobbies();

function displayGobbies() {
    gobbieListEl.textContent = '';

    for (let gobbie of gobbies) {
        const gobbieEl = renderGobbieEl(gobbie);

        gobbieListEl.append(gobbieEl);
    }

}

