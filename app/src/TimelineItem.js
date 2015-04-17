
var React = require('react'),
	TimelineItem;

TimelineItem = React.createClass({
	propTypes: {
		eventTime : React.PropTypes.string,
		des       : React.PropTypes.string,
		id        : React.PropTypes.number
	},
	getDefaultProps: function() {
		return {
			eventTime : '',
			des       : ''
		};
	},

	/*jshint ignore:start */
	render: function() {
		return (
			<div>
				<div className="time-line-item">
					<p className="item-title">{this.props.des}</p>
					<p className="item-date">
						{this.props.eventTime}
						<a href={'#/pointer/'+ this.props.id}>link</a>
					</p>
				</div>
			</div>
		);
	}
	/*jshint ignore:end */
});

module.exports = TimelineItem;