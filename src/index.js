import _ from 'lodash';
import printThis from './print.js';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');


  element.innerHTML = _.join(['Hola', 'webpack'], ' ');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printThis;

  element.appendChild(btn);

   return element;
}

document.body.appendChild(component());