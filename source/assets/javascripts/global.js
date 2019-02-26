import $ from 'jquery';
import 'popper.js';
import 'bootstrap';
import './global/fontawesome';

window.jQuery = $;
window.$ = $;

function postAction({ id, action = 'completed' }) {
	window.parent.postMessage({
		id,
		action,
		eventTime: new Date().toISOString(),
	}, '*');
}

window.postAction = postAction;
