/*
*require css
*/
import 'bootstrap.css';
import 'vis.css';
import '../assets/styles/style';
import '../assets/styles/compass.style';


/*
*require module
*/
import React from 'react';
import TimelineView from '../src/timeline-view';

/* jshint ignore:start */
React.render(<TimelineView />, document.getElementById('app'));
/* jshint ignore:end */
