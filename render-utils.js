export function renderGobbieEl(gobbie) {
    const gobbieEl = document.createElement('div');
    const nameEl = document.createElement('h2');
    const HpEl = document.createElement('h2');
    
    gobbieEl.classList.add('gobbie');

    

    // const newGobbiePic = document.createElement('img');

    // const gobbiePic = gobbie.hp > 0 ? imgEl.src = './assets/gobbie.png' : imgEl.src = './assets/explosion.gif';
    // document.body.append(imgEl);

    //let gobbiePic = gobbie.hp > 0 ? newGobbiePic.classList.add('gobbie-doom') : newGobbiePic.classList.add('gobbie-boom');
    // let gobbiePic = '';

    if (gobbie.hp > 0) {
        HpEl.classList.add('gobbie-doom');
    } else {
        HpEl.classList.add('gobbie-boom');
    }
    if (gobbie.strength > 2) {
        HpEl.classList.add('gobbie-gloom');
    }


    // if (gobbie.hp === 1 || 
    //     gobbie.hp === 2 || 
    //     gobbie.hp === 3 || 
    //     gobbie.hp === 4 || 
    //     gobbie.hp === 5 || 
    //     gobbie.hp === 6) {

    //     gobbiePic = '👺';

    // } else if (gobbie.hp < 1) { 
    //     //boom gobbie doom
    //     gobbiePic = '💀';

    // }

    nameEl.textContent = gobbie.name;
    HpEl.textContent = ` (${gobbie.hp})`;

    gobbieEl.append(nameEl, HpEl);

    return gobbieEl;
}