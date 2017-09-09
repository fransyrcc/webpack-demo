import _ from 'lodash';
import './style.css';
import Giraffe from './giraffe.png';
import Background from './lakeland_landscape.jpg';

function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hola', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div
  var myImage = new Image();

  myImage.src = Giraffe;
  
  element.appendChild(myImage);

   return element;
}

document.body.appendChild(component());