import './style.css';
import ResponsiveBackgroundImage from './ResponsiveBackgroundImage'

let elements = document.querySelectorAll('[data-responsive-background-image]');
for (let i=0; i<elements.length; i++) {
  new ResponsiveBackgroundImage(elements[i]);
}
