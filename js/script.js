"use strict";
//  Declares variables for HTML elements with specific IDs.
let inputBar = document.getElementById('inputBar');
let heroList = document.getElementById("heroList");
let errorMessage = document.getElementById("errorMessage");
let error_font = document.getElementById("error_font");
let favBtn = document.getElementById("favBtn");

// Fetches the data from the Marvel API server
function fetchData(apiUrl = (`https://gateway.marvel.com/v1/public/characters?apikey=0d91f95f7c505d78d6a06fa5ad5ca059&hash=c322be7af1f805ecf64aeb93749778f1&ts=1`)) {
    fetch(apiUrl).then((response) => response.json()).then((data) => displayData(data));
}
fetchData();

// Handles displaying fetched data, error messages, and adding favorites to the local storage.
function displayData(fetch_hero) {
    let results = fetch_hero.data.results;
    if (results.length != 0) {
        heroList.innerHTML = "";
        for (let hero of results) {
            let li = document.createElement('li');
            li.innerHTML = 
            `<img src="${hero.thumbnail.path+"."+hero.thumbnail.extension}" id="poster"/>
            <h3 id="heroTitle" data-id=${hero.id}>${hero.name}</h3>
            <a href="./heroInfo.html?ch_id=${hero.id}" target="_blank" id="details" data-id="${hero.id}"> About </a>
            <a class="favBtn" id="favhero_btn_${hero.id}" data-title="${hero.name}" onclick="addToFavList(${hero.id},'${hero.name}','${hero.thumbnail.path+"."+hero.thumbnail.extension}')">Add To Favourites <i class="fas fa-heart"></i></a>`
            heroList.appendChild(li);
        }
    } else {
      error_font.innerHTML = `Oops!! There is no super hero with such name, Please Try again...`;
      heroList.style.display = "none";
        setTimeout(()=>{
            error_font.innerHTML = "";
            heroList.style.display = "block";
        }, 3000);
    }
    // Mark the favorites Hero and add the class on btn
    for (let btnClass in localStorage) {
        let btn = document.getElementById(`favhero_btn_${btnClass}`);
        if (btn) {
            btn.classList.add('fav_hero_added');
        }
    }
}

// Sets up event listeners for the input bar to fetch results based on user input and for adding favorites to the list.
inputBar.addEventListener("input", e => {
    const text = e.target.value.toLowerCase();
    if (text.length != 0) {
        fetchData(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${text}&apikey=0d91f95f7c505d78d6a06fa5ad5ca059&hash=c322be7af1f805ecf64aeb93749778f1&ts=1`);
    }
    else {
        fetchData();
    }
})

//Implements a function to add Super hero to the favorites list and store the hero in local storage.
function addToFavList(hero_id, hero_name, hero_img) {
    let favhero_btn = document.getElementById(`favhero_btn_${hero_id}`);

    if (!localStorage.getItem(hero_id)) {
        let obj = {
            "id": hero_id,
            "name": hero_name,
            "img": hero_img
        }
        localStorage.setItem(hero_id, JSON.stringify(obj));
        favhero_btn.classList.add('fav_hero_added');
        errorMessage.innerHTML = `${hero_name} is added in the Favourite List...`;
        document.getElementById("errorMessage").style.backgroundColor = "#000";
        setTimeout(()=>{
            errorMessage.innerHTML = "";
            document.getElementById('errorMessage').style.removeProperty("background-color");
        }, 3000);

    } else {
        localStorage.removeItem(hero_id);
        favhero_btn.classList.remove('fav_hero_added');
        errorMessage.innerHTML = `${hero_name} is Removed from the Favourite List...`;
        document.getElementById("errorMessage").style.backgroundColor = "#000";
        setTimeout(()=>{
            errorMessage.innerHTML = "";
            document.getElementById('errorMessage').style.removeProperty("background-color");
        }, 3000);
    }
    fetchData();
}