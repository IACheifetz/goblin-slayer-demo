export function renderGobbieEl(gobbie) {
    const gobbieEl = document.createElement('div');
    const nameEl = document.createElement('h2');
    const HpEl = document.createElement('h2');
    //adds class to the dynamic gobbie div for styling 
    gobbieEl.classList.add('gobbie');

    

    // const newGobbiePic = document.createElement('img');

    // const gobbiePic = gobbie.hp > 0 ? imgEl.src = './assets/gobbie.png' : imgEl.src = './assets/explosion.gif';
    // document.body.append(imgEl);

    //let gobbiePic = gobbie.hp > 0 ? newGobbiePic.classList.add('gobbie-doom') : newGobbiePic.classList.add('gobbie-boom');
    // let gobbiePic = '';



    //if statement to add a class based on gobbie health
    if (gobbie.hp > 2) {
        //adds a class for styling if gobbie is over 2 health
        HpEl.classList.add('gobbie-doom');
    } else if (gobbie.hp <= 2 && gobbie.strength > 2) {
        //adds a class for styling if gobbie is over 2 health and strength
        HpEl.classList.add('gobbie-strongAngry');
    } else if (gobbie.hp <= 2) {
        //adds a class for styling if gobbie is under 2 health
        HpEl.classList.add('gobbie-angry');
    } 
    //if statement to add a class if gobbie health reaches zero
    if (gobbie.hp <= 0) {
        //adds a class for styling if gobbie dies
        HpEl.classList.add('gobbie-boom');
    }
    //if statement to add a class based on gobbie strength
    if (gobbie.strength > 2) {
        //adds a class for styling if gobbie's strength value is over 2
        HpEl.classList.add('gobbie-gloom');
    }


        //sets nameEl h2 text created by function to be the name received from form input
    nameEl.textContent = gobbie.name;
        //sets HpEl text to be equal to the randomly generated health value generated in the newGobbie object
    HpEl.textContent = ` (${gobbie.hp})`;
        //adds the h2s created and the values assigned to them to the dynamic gobbie div
    gobbieEl.append(nameEl, HpEl);
        //return statement ending function and declares the div to be returned
    return gobbieEl;
}

