import React from 'react';
import Component from '../src/component';

class TimelineItem extends Component {
	constructor(props) {

	}
	shouldComponentUpdate() {
    	return Addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
  	}
	render() {
		/*jshint ignore:start */
		return (
			<div>
				<div className="time-line-item">
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
	id        : React.PropTypes.number
};

TimelineItem.defaultProps = {
	eventTime : '',
	des       : '',
	id        : 0
};

module.exports = TimelineItem;