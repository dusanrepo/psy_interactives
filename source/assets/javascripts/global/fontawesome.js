

// https://stackoverflow.com/questions/47711951/font-awesome-5-bundle-via-npm
import fontawesome from '@fortawesome/fontawesome';
import faPlay from '@fortawesome/fontawesome-free-solid/faPlay';
import faPause from '@fortawesome/fontawesome-free-solid/faPause';
import faEject from '@fortawesome/fontawesome-free-solid/faEject';
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus';
import faMinus from '@fortawesome/fontawesome-free-solid/faMinus';
import faBullseye from '@fortawesome/fontawesome-free-solid/faBullseye';
import faCircle from '@fortawesome/fontawesome-free-regular/faCircle';
import faDotCircle from '@fortawesome/fontawesome-free-regular/faDotCircle';
import faSpinner from '@fortawesome/fontawesome-free-solid/faSpinner';
import faArrowUp from '@fortawesome/fontawesome-free-solid/faArrowUp';

// This enables using FontAwesome in CSS pseudo elements
// see: https://fontawesome.com/how-to-use/svg-with-js#pseudo-elements
fontawesome.config.searchPseudoElements = true;

// Icons should be imported individually to keep bundle size down
fontawesome.library.add(
	faPlay,
	faPause,
	faEject,
	faPlus,
	faMinus,
	faBullseye,
	faCircle,
	faDotCircle,
	faSpinner,
	faArrowUp
);

// If really necessary, entire styles can be loaded instead of specifying individual icons
// import solid from '@fortawesome/fontawesome-pro-solid';
// fontawesome.library.add(solid);

// Execute SVG replacement
fontawesome.dom.i2svg();
