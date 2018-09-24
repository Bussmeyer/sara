import 'normalize.css';
import './style.css';
import 'tippy.js/dist/tippy.css';

import tippy from 'tippy.js/dist/tippy.min.js';
import ResponsiveBackgroundImage from './ResponsiveBackgroundImage'

let elements = document.querySelectorAll('[data-responsive-background-image]');
for (let i=0; i<elements.length; i++) {
  new ResponsiveBackgroundImage(elements[i]);
}
