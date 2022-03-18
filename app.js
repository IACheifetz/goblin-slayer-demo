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
    { name: 'Brayflox', hp: 6, strength: 3, accuracy: Math.random() > .44 },
    { name: 'Uptalks', hp: 3, strength: 1, accuracy: Math.random() }, 
    { name: 'Longflops', hp: 1, strength: 1, accuracy: Math.random() }
];
//submit and event for form to prevent clicking causing issues
formEl.addEventListener('submit', (e) => {
    if (playerHP > 0) {
      //and event.preventDefault to keep info from being appended to URL and refreshing
        e.preventDefault();
  //constant variable declared to take in data from form input
        const data = new FormData(formEl);
//variable providing format for producing new gobbie objects when form is submitted
        const newGobbie = {
      //calls on data variable declared above to pull string inputed into form as gobbie name
            name: data.get('gobbie-name'),
        //sets health to a random number between 1 and 6
            hp: Math.ceil(Math.random() * 6),
        //sets damage dealt to a random number between 1 and 5
            strength: Math.ceil(Math.random() * 5),
            accuracy: (Math.random())
        };
    //inserts newGobbie variable at the beginning of the gobbies array 
        gobbies.unshift(newGobbie);

        displayGobbies();
    //clears out the form and its data for the next input at the end of the event 
        formEl.reset();} else {
        alert('You and your friends are dead. Restarting...');
    }
});

displayGobbies();

function displayGobbies() {
  //resets text of dynamic goblin list in html
    gobbieListEl.textContent = '';
    //loops through gobbies array
    for (let gobbie of gobbies) {
      //declares a variable equal to the imported render function
        const gobbieEl = renderGobbieEl(gobbie);

        //adds an eventListener for clicking on the div rendered by imported function
        gobbieEl.addEventListener('click', () =>{
          //if statement to disable click function on gobbie divs if the gobbie has died
            if (gobbie.hp > 0 && playerHP > 0){
                //if statement determining with a 50% chance from math.random if the player hits the gobbie when clicked
                if (Math.random() > .5) {
                  //results of if statement, gobbie loses 1 hitpoint
                    gobbie.hp--;
                    //and an alert populates notifying that the specific gobbie was hit
                    alert(gobbie.name + ' got hit');
                    //else argument if the 50% chance fails
                } else {
                  //alert populates notifying that the player missed the clicked gobbie
                    alert('Uplander missed ' + gobbie.name);
                }
                //after player attack executes regardless of outcome, gobbie attacks with a 33% chance from math.random
                if (Math.random() > gobbie.accuracy) {
                  //results of if statement, player loses hitpoints equal to gobbies randomly generated strength
                    playerHP -= gobbie.strength;
                    //alert populates notifying player that the gobbie successfully hit them
                    alert(gobbie.name + ' hit the Uplander');
                } else {
                  //if gobbie fails 33% to hit, alert populates with string concatenated with gobbie's inputed name notifying that the gobbie successfully hit
                    alert('Uplander dodged ' + gobbie.name + '\'s attack!');
                }
                //if statement based on if gobbie's hitpoints reaches zero
                if (gobbie.hp === 0) {
                  //counter for number of gobbies defeated increments by one
                    gobbiefolkDefeated++;
                    //h3 element set to update with concatenated string with of count of defeated gobbies
                    defeatedGobbiesEl.textContent = `Uplander's murderkilled ${gobbiefolkDefeated} innocent gobbiefolk(s)`;
                }
            }
                //if statement declaring results if player's health reaches or goes below zero
            if (playerHP <= 0) {
              //populates an alert stating that the game is over (currently no effect on "gameplay")
                alert('You and your friends are dead. Game over');
            }
            //calls the displayGobbies function within the eventListener inside the displayGobbies function to execute
            displayGobbies();
            //updates HTML element with player health if necessary
            playerHPEl.textContent = `Uplander HP is currently: ${playerHP}`;

        });
        //adds the dynamic gobbie div created in this function to the gobbie list div
        gobbieListEl.append(gobbieEl);
    }

}

