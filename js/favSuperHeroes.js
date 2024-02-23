"use strict";
// Declares variables for HTML elements with specific ID
let herolist = document.getElementById("heroList");

// Renders the local data "NO API CALL IS BEEN MADE" to reduce overhead.
// Retrieves data from the localStorage, parses it, dynamically creates HTML elements to display the heroes.
function displayData() {
    let heroListHolder = localStorage;
    console.log(heroListHolder);
    if (heroListHolder.length != 0) {
        herolist.innerHTML = "";
        for (let i in heroListHolder) {
            if (i == 'length') {
                break;
            }
            let hero = JSON.parse(localStorage.getItem(i));
            let li = document.createElement('li');
            li.id = `heroCard_${hero.id}`;
            li.innerHTML = 
            `<img src="${hero.img}" id ="poster"/>
            <h3 id="heroTitle"  data-id=${hero.id}>${hero.name}</h3>
            <a href="./heroInfo.html?ch_id=${hero.id}" target="_blank" id="details" data-id="${hero.id}"> About </a>
            <a class="favBtn fav_container_selected" id="favhero_btn_${hero.id}" data-title="${hero.name}" onclick="removeFavList(${hero.id})">Remove</i></a>`
            heroList.appendChild(li);
        }
    }
}
displayData();

//Removes a specific hero from both localStorage and the displayed list.
function removeFavList(hero_id) {
    let removefavHero = document.getElementById(`heroCard_${hero_id}`);
    localStorage.removeItem(hero_id);
    removefavHero.remove();
}