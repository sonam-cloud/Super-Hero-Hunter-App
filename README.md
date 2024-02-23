<h1> SuperHero-Hunter-App </h1>

<p>A simple Super Hero Hunter application where the users can search for their favourite super heroes and add them to favourites and also view the entire information about any super hero by clicking on About Button of their choice. </p>

<p>The application is developed using HTML, CSS and Vanilla JS, it fetches all the data from the API and displays them according to the searched query. </p>

<p>Link to the API being used to fetch the data :https://developer.marvel.com/</p>
<p>Github link : https://github.com/sonam-cloud/Super-Hero-Hunter-App/</p>
<p>Host link : https://sonam-cloud.github.io/Super-Hero-Hunter-App/</p>

<h3> FEATURES & FUNCTIONALITY </h3>
<h5>Home Page</h5>
<ul type="circle">
  <li>Fetch and display a list of SuperHeros (Characters) on the home page. Also Users can search for any super hero of their choice by entering in the character name of the super hero in the search bar.</li>
  <li>Suppose I type “a” in the search box, it should show all Super Heroes List which related characters to "a".</li>
  <li>Each search result of the superhero should have two buttons these are "About" and "favorites". 
    <ol>
      <li>When click on "About" button it will open a new page with more information about that superhero (Super Hero page).</li>
      <li>When click on "favorites" button which superhero should be added to “My favorite superheroes” list.</li>
    </ol>
  </li>
  <li>Users can view all their favourite super heroes in the “My favorite superheroes” list, by clicking on the button to "My Favourites" at the top right corner of the web page.</li>
</ul>
<h5>My favourite Superheroes Page</h5>
<ul type="circle">
  <li>Display a list of all the favourite superheroes.</li>
   <li>Users can remove any super hero from “My favorite superheroes” list at any point of time, which clicking on "Delete" icon.</li>
</ul>
<h5>Super Hero Page</h5>
<ul type="circle">
  <li>Users will see a lot of information about the superhero information provided by the API (name, First Appearence, Description, comics, events, series, stories, etc).</li>
</ul>





// 1. An async function named fetchData is defined. 
// 2. Inside this function, an apiUrl variable is declared with the Marvel API URL.
// 3. The fetch function is called with the apiUrl, and a chain of promises is set up using then and catch methods.
// 4. The first then block checks if the response is not okay (response code is not in the range 200-299) and throws an error with a message.
// 5. If the response is okay, it converts the response to JSON format using the json method and passes it to the next then block.
// 6. The second then block logs the JSON formatted data to the console with a message.
// 7. The catch block handles any errors that may occur during the fetch process and logs the error to the console.
// 8. The fetchData function is called to initiate the fetching process when the script is executed.

// - The .then method is a callback function that is executed after a Promise is resolved.
// - The callback function takes a parameter data1 which represents the resolved data from the Promise.
// - It first logs the user data (data1) to the console with the message 'User Data:'.
// - It then assigns the data1.data.results to a variable listOfHeros.
// - The code then checks if the listOfHeros array has a length of 0. If it does, it calls the renderHeroList function.
// - If the listOfHeros array is not empty, it still calls the renderHeroList function.



// This code defines a JavaScript function called displayData(hero) which takes a hero object as a parameter. Inside the function:
// 1. It creates a new list item element.
// 2. It sets the innerHTML property of the list item to contain an image tag, a heading (h3), and two buttons. The content is created using template literals to inject dynamic values from the hero object.
// 3. The image source, hero title (name), and buttons have dynamic data attributes and values extracted from the hero object, such as hero.thumbnail.path, hero.thumbnail.extension, hero.id, and hero.name.
// 4. Finally, it appends the newly created list item to a DOM element with the id listOfHeroInDom

// This code defines a function called renderHeroList that loops through an array called listOfHeros. 
// It clears the inner HTML of an element listOfHeroInDom at the beginning by setting it to an empty string. Then, 
// it iterates over each item in listOfHeros using a for loop and calls a function displayData passing each hero object (listOfHeros[i]) as an argument. 
// This function is responsible for rendering the hero data on the screen or performing any display-related operations for each hero in the list.


