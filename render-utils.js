export function renderGobbieEl(gobbie) {
    const gobbieEl = document.createElement('div');
    const nameEl = document.createElement('p');
    const HpEl = document.createElement('p');
    
    gobbieEl.classList.add('gobbie');

    let gobbiePic = '';

    if (gobbie.hp === 3 || 
        gobbie.hp === 1 || 
        gobbie.hp === 2 || 
        gobbie.hp === 4 || 
        gobbie.hp === 5 || 
        gobbie.hp === 6) {

        gobbiePic = '👺';

    } else if (gobbie.hp < 1) { 

        gobbiePic = '💀';

    }

    nameEl.textContent = gobbie.name;
    HpEl.textContent = `${gobbiePic} (${gobbie.hp})`;

    gobbieEl.append(nameEl, HpEl);

    return gobbieEl;
}