import './style.css';
import Loadingimage from './loadingimage';
import Products from './Products';

let elements = document.querySelectorAll('[splash]');
for (let i=0; i<elements.length; i++) {
  new Loadingimage(elements[i]);
}

const image = document.getElementById('splash-img');
const options = {};
const tags = Products;
const taggd = new Taggd(image, options, tags);
