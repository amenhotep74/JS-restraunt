import _ from 'lodash';
import { loadPage } from './loadpage.js';

function component() {
    const element = document.createElement('button');
    const element1 = document.createElement("P");
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element1.innerHTML = "Hello from paragraph";
    
    return element1;
  }

  
  // calling the loadpage function from the loadpage.js file 
  loadPage();

 