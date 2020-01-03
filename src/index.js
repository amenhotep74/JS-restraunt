import _ from 'lodash';
import { loadPage } from './loadpage.js';
import { buildmenu, createmenu } from './themenu.js';


  
// calling the loadpage function from the loadpage.js file by default 
loadPage();

// if menu button is clicked
// adding event listeners to li's
document.getElementById("li").addEventListener("click", function(){
  alert("Menu clicked on");
});

// createmenu();
// if About Us is clicked
 