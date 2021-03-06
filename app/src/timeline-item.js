import React from 'react';
import Component from '../src/component';

class TimelineItem extends Component {
	render() {
		/*jshint ignore:start */
		let classes = this.props.state + ' time-line-item';
		return (
			<div>
				<div className={classes}>
					<p className="item-title">{this.props.des}</p>
					<p className="item-date">
						{this.props.eventTime}
						{/*<a href={'#/pointer/'+ this.props.id}>link</a>*/}
					</p>
				</div>
			</div>
		);
		/*jshint ignore:end */
	}
}

TimelineItem.propTypes = {
	eventTime : React.PropTypes.string,
	des       : React.PropTypes.string,
	state     : React.PropTypes.string,
	id        : React.PropTypes.number
};

TimelineItem.defaultProps = {
	eventTime : '',
	des       : '',
	state     : '',
	id        : 0
};

module.exports = TimelineItem;