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
    { name: 'Brayflox', hp: 6, strength: 3 },
    { name: 'Uptalks', hp: 3, strength: 1 }, 
    { name: 'Longflops', hp: 1, strength: 1 }
];

formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(formEl);

    const newGobbie = {
        name: data.get('gobbie-name'),
        hp: Math.ceil(Math.random() * 6),
        strength: Math.ceil(Math.random() * 5)
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


        gobbieEl.addEventListener('click', () =>{
            if (gobbie.hp > 0){

                if (Math.random() > .5) {
                    gobbie.hp--;
                    alert(gobbie.name + ' got hit');
                } else {
                    alert('You missed ' + gobbie.name);
                }

                if (Math.random() < .33) {
                    playerHP -= gobbie.strength;
                    alert(gobbie.name + ' hit you');
                } else {
                    alert('You dodged ' + gobbie.name + '\'s attack!');
                }

                if (gobbie.hp === 0) {
                    gobbiefolkDefeated++;
                    defeatedGobbiesEl.textContent = `You've murderkilled ${gobbiefolkDefeated} innocent gobbiefolk(s)`;
                }}

            if (playerHP === 0) {
                alert('You and your friends are dead. Game over');
            }
            
            displayGobbies();
            playerHPEl.textContent = `Your HP is currently: ${playerHP}`;

        });
        gobbieListEl.append(gobbieEl);
    }

}

