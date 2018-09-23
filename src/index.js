import 'normalize.css';
import './style.css';
import 'tippy.js/dist/tippy.css';

import tippy from 'tippy.js';

const responsiveImage = require(`./${process.env.IMAGE}`);

var h1 = document.createElement('h1');
h1.innerHTML = 'Hello world!';
document.body.appendChild(h1);

var img = new Image();
img.src = responsiveImage.src;
img.setAttribute('srcset', responsiveImage.srcSet);
document.body.appendChild(img);
