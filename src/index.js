import 'normalize.css';
import './style.css';
import 'tippy.js/dist/tippy.css';

import tippy from 'tippy.js';
import loadFullImages from './loadImages';

window.addEventListener('load', function onWindowLoad() {
  loadFullImages();
});
