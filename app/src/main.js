
/*
*require css
*/
var bootstrapStyle = require('bootstrap.css');
var visStyle = require('vis.css');
var style = require('../assets/styles/style');
var compassStyle = require('../assets/styles/compass.style');


/*
*require module
*/
var React = require('react');
var TimelineView = require('../src/TimelineView');

/* jshint ignore:start */
React.render(<TimelineView />, document.getElementById('app'));
/* jshint ignore:end */
