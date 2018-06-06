/**
 * main.js
 * Entrypoint for webpack
 */
import ready from './utils/ready';
import registerServiceWorker from './utils/serviceWorker';
import { info } from './utils/debug';

import Lazyload from './modules/lazyload';
import PageTransition from './modules/swup';
import ScrollTo from './modules/scrollto';
import ScrollAnimation from './modules/scrollanimation';
import Instagram from './modules/instafeed';

function onReady(e) {
  registerServiceWorker();
	info(`Event: ${e.type}`, `Datestamp: ${this.date}`);
	Lazyload();
	PageTransition();
	Instagram();
	ScrollTo();
	ScrollAnimation();
}

ready(onReady, {
  date: new Date(),
});
