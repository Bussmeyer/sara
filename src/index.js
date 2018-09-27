import './style.css';
import Loadimage from './Loadimage';
const Products = require('./sets/' + process.env.SET + '/products.js');


let elements = document.querySelectorAll('[splash]');
for (let i=0; i<elements.length; i++) {
  new Loadimage(elements[i]);
}

const image = document.getElementById('splash-img');
const options = {};
const tags = Products;
const taggd = new Taggd(image, options, tags);
