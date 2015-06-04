import React from 'react';
import TimelineItem from'../src/timeline-item';
import Component from '../src/component';
//vender
import vis    from 'vis';
import moment from 'moment';

class TimelineControl extends Component {
	constructor(props) {
		super();
		this._bind('_rangechange', '_rangechanged','_itemSelect','_moveCurrentDay','_moveLeft','_moveRight');
		this._timeline = null;
		this._timelineItems = [];
	}
	componentDidMount() {
		this._createTimeline();
	}
	componentDidUpdate() {
    	this._updateItems();
    }
    _moveCurrentDay() {
    	this._timeline.moveTo(moment());
    }
    _moveLeft() {
    	let range = this._timeline.getWindow();
    	let	moveRange =  moment(range.start).add(-1, 'months');
    	this._timeline.moveTo(moveRange);
    }
    _moveRight() {
    	let range = this._timeline.getWindow();
    	let	moveRange =  moment(range.end).add(1, 'months');
    	this._timeline.moveTo(moveRange);
    }
    _updateItems() {
    	let moveToTime = moment(this.props.items[this.props.items.length-1].start).day(10);
    	this._timelineItems.clear();
    	this._timelineItems.add(this.props.items);
    	this._timeline.moveTo(moveToTime);
    }
	_createTimeline() {
		let options = {
				min             : this.props.options.minDate,
				max             : this.props.options.maxDate,
				editable        : false,
				moveable        : false,
				showCurrentTime : true,
				start           : moment().day(-55),
				end             : moment().day(10),
				autoResize      : true,
				height          : '100%',
				zoomMin         : 1000 * 60 * 60 * 24 * 7,
				zoomMax         : 1000 * 60 * 60 * 24 * 31 * 12,
				template: function (item) {
					/*jshint ignore:start */
				    return React.renderToStaticMarkup(
					    		<TimelineItem
					    			eventTime={item.eventTime}
					    			des={item.description}
					    			id={item.id}
					    			state={item.state} />
				    		);
				    /*jshint ignore:end */
				}
			};
		this._timelineItems = new vis.DataSet(this.props.items);
		this._timeline = new vis.Timeline(
				this.refs.visualization.getDOMNode(),
				this._timelineItems,
				options
			);
		this._timeline.on('select',this._itemSelect);
		this._timeline.on('rangechange',this._rangechange);
		this._timeline.on('rangechanged',this._rangechanged);
	}
	_itemSelect(properties) {
		if (properties.items.length) {
			this.props.onItemSelect(properties.items[0]);
		}
	}
	_rangechange(properties) {
		this.props.onRangechange(properties);
	}
	_rangechanged(properties) {
		this.props.onRangechanged(properties);
	}
	render() {
		/*jshint ignore:start */
		return (
			<div>
				<a className="time-line-btn move-last btn btn-primary" onClick={this._moveCurrentDay}>Current Day</a>
				<div>
					<a onClick={this._moveLeft}>左移</a>
					<a onClick={this._moveRight}>右移</a>
				</div>
				<div ref='visualization' id='visualization'></div>
			</div>
		);
		/*jshint ignore:end */
	}
}

TimelineControl.propTypes = {
	options        : React.PropTypes.object,
	items          : React.PropTypes.array,
	onItemSelect   : React.PropTypes.func,
	onRangechange  : React.PropTypes.func,
	onRangechanged : React.PropTypes.func
}

TimelineControl.defaultProps = {
	options        :{
		minDate:'',
		maxDate:'',
	},
	items          : [],
	onItemSelect   : function(){},
	onRangechange  : function(){},
	onRangechanged : function(){}
}

export default TimelineControl;