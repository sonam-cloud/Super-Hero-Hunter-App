"use strict";
//  Declares variables for HTML elements with specific IDs and tag name.
let imgEle = document.getElementsByTagName("img")[0];
let titleEle = document.getElementById("name");
let releaseDate = document.getElementById("release-date");
let description = document.getElementById("description");
let comics = document.getElementById("comics");
let series = document.getElementById("series");
let seriesNumber = document.getElementById("seriesNumber");
let comicNumber = document.getElementById("comicNumber");

// Get the Hero ID from the params
let params = (new URL(window.location)).searchParams;
let hero_id = params.get("ch_id");

// Fetches the data from the Marvel API server for the specified hero ID.
function fetchData(apiUrl = (`https://gateway.marvel.com:443/v1/public/characters/${hero_id}?apikey=0d91f95f7c505d78d6a06fa5ad5ca059&hash=c322be7af1f805ecf64aeb93749778f1&ts=1`)) {
    fetch(apiUrl).then((response) => response.json()).then((data) => displayData(data));
}
fetchData();

//Displayed dynamically on the webpage by updating the content of the retrieved HTML elements with the hero's details.
function displayData(hero_data) {
    let heroDetails = hero_data.data.results;

    if (heroDetails.length != 0) {
        heroDetails = hero_data.data.results[0];

        //img
        imgEle.innerHTML = `<img src="${heroDetails.thumbnail.path+"."+heroDetails.thumbnail.extension}" id="poster"/>`
        imgEle.setAttribute("src", `${heroDetails.thumbnail.path}.${heroDetails.thumbnail.extension}`);
        
        // Name
        titleEle.innerHTML +=`<h3>Name - ${heroDetails.name} </h3>`;

        //release-date
        let date = `${heroDetails.modified}`
        let parsedDate = "";
        for(let i of date){
            if(('0'  <= i && i <= '9') || i == '-')
                parsedDate += i;
            else break;
        }
        releaseDate.innerHTML +=  `<p><span>First Appearence - </span> ${parsedDate}</p>`;

        // Description
        if(heroDetails.description.length != 0){
            description.innerHTML += `<p><span>Description - </span> ${heroDetails.description}</p>`;
        }else{
            description.innerHTML += `<p>Description Not available</p>`;
        }

        // Comic Number
        comicNumber.innerHTML += `${heroDetails.comics.available}`;
        let comicsNum = 1;
        for(let i of heroDetails.comics.items){
            comics.innerHTML += `<p><span>Comic Number ${comicsNum} :  </span> ${i.name}</p>`;
            comicsNum++;
        }

        //series number
        seriesNumber.innerHTML += `${heroDetails.series.available}`;
         let seriesNum = 1;
        for(let i of heroDetails.series.items){
            series.innerHTML += `<p><span>Series Number ${seriesNum} : </span> ${i.name}</p>`;
            seriesNum++;
        }
    }
}