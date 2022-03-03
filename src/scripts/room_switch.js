import {stopAll} from './room';

document.addEventListener("DOMContentLoaded", () => {

  const room = document.getElementsByClassName('room')[0];
  const lofiItems = document.getElementsByClassName('lofi_items')
  const calmItems = document.getElementsByClassName('calm_items')
  let currentItemsArr = calmItems;
  // localStorage.setItem('currentRoom', 'chillRoom')

  const lofiLi = document.getElementById('lofi');
  const calmLi = document.getElementById('calm');

  let currentLi = calmLi;
  currentLi.style.background = 'grey';

  const removeItems = () => {
    for (let i = 0; i < currentItemsArr.length; i++) {
      const item = currentItemsArr[i];
      item.style.display = 'none';     
      currentLi.style.background = ''; 
    }
  }

  const displayItems = () => {
    for (let i = 0; i < currentItemsArr.length; i++) {
      const item = currentItemsArr[i];
      item.style.display = 'block';   
      currentLi.style.background = 'grey';   
    }
  }

  lofiLi.addEventListener('click', () => {
    if (lofiLi.style.background === '') stopAll();

    room.setAttribute('id', 'lofi-room');
    removeItems();
    currentLi = lofiLi;
    currentItemsArr = lofiItems;
    displayItems();
    // lofiLi.style.background = 'red'
  })

  calmLi.addEventListener('click', () => {
    if (calmLi.style.background === '') stopAll();

    room.setAttribute('id', 'calm-room');
    removeItems();
    currentLi = calmLi;
    currentItemsArr = calmItems;
    displayItems();
  })
});