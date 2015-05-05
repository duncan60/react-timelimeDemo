
var React        = require('react'),
	vis          = require('vis'),
	moment       = require('moment'),
	TimelineItem = require('../src/TimelineItem'),
	TimelineControl;

TimelineControl= React.createClass({
	_timeline      : null,
	_timelineItems : [],
	propTypes: {
		options        : React.PropTypes.object,
		items          : React.PropTypes.array,
		onItemSelect   : React.PropTypes.func,
		onRangechange  : React.PropTypes.func,
		onRangechanged : React.PropTypes.func
	},
    getDefaultProps: function() {
    	return {
			options        :{
				minDate:'2014-01-01',
				maxDate:'2015-01-01',
			},
			items          : [],
			onItemSelect   : function(){},
			onRangechange  : function(){},
			onRangechanged : function(){}
	    };
    },
	componentDidMount: function() {
		this._createTimeline();
	},
	shouldComponentUpdate: function(nextProps,nextState) {
        return this.props !== nextProps;
    },
    componentDidUpdate: function() {
    	this._updateItems();
    },
    _moveCurrentDay: function() {
    	this._timeline.moveTo(moment());
    },
    _moveLeft: function(){
    	var range = this._timeline.getWindow(),
    		moveRange =  moment(range.start).add(-1, 'months');
    	this._timeline.moveTo(moveRange);
    },
    _moveRight: function(){
    	var range = this._timeline.getWindow(),
    		moveRange =  moment(range.end).add(1, 'months');
    	this._timeline.moveTo(moveRange);
    },
    _updateItems: function() {
    	var moveToTime = moment(this.props.items[this.props.items.length-1].start).day(10);
    	this._timelineItems.clear();
    	this._timelineItems.add(this.props.items);
    	this._timeline.moveTo(moveToTime);
    },
	_createTimeline: function() {
		var options = {
				min             : this.props.options.minDate,
				max             : this.props.options.maxDate,
				editable        : false,
				moveable        : true,
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
					    			id={item.id} />
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
	},
	_itemSelect: function(properties) {
		if (properties.items.length) {
			this.props.onItemSelect(properties.items[0]);
		}
	},
	_rangechange: function(properties) {
		this.props.onRangechange(properties);
	},
	_rangechanged: function(properties) {
		this.props.onRangechanged(properties);
	},
	render: function() {
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

});

module.exports = TimelineControl;
