import 'normalize.css';
import './style.css';
import 'tippy.js/dist/tippy.css';

import tippy from 'tippy.js';
import loadFullImages from './loadImages';
import ResponsiveBackgroundImage from './ResponsiveBackgroundImage'

window.addEventListener('load', function onWindowLoad() {
  loadFullImages();
});

let elements = document.querySelectorAll('[data-responsive-background-image]');

for (let i=0; i<elements.length; i++) {
  new ResponsiveBackgroundImage(elements[i]);
}
