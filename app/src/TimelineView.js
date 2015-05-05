var React           = require('react'),
	TimelineControl = require('../src/TimelineControl'),
	Timelineview;

Timelineview = React.createClass({
	getInitialState: function() {
		return  {
			timelineOptions:{
				minDate:'2014-01-01',
				maxDate:'2016-01-01',
			},
			items:[
				{id:1, description:'descriptionA', eventTime:'04-10~04-20', start:'2015-04-10',className:'going'},
				{id:2, description:'descriptionB', eventTime:'03-01~03-20', start:'2015-03-01',className:'going'},
				{id:3, description:'descriptionC', eventTime:'03-15~03-25', start:'2015-03-15',className:'going'},
				{id:4, description:'descriptionD', eventTime:'02-21~02-28', start:'2015-02-21',className:'end'},
				{id:5, description:'descriptionE', eventTime:'01-30~02-15', start:'2015-01-30',className:'end'},
				{id:6, description:'descriptionF', eventTime:'12-20~12-31', start:'2014-12-20',className:'end'},
				{id:7, description:'descriptionG', eventTime:'12-10~12-25', start:'2014-12-10',className:'end'},
				{id:8, description:'descriptionH', eventTime:'11-05~12-05', start:'2014-11-05',className:'end'}
			]
		};
	},
	_itemSelect: function(id) {
		console.log('select ID:',id);
	},
	_rangechange: function(properties) {
		//console.log('_rangechange',properties);
	},
	_rangechanged: function(properties) {
		//console.log('_rangechanged',properties);
	},

	render: function() {
		return (
            /*jshint ignore:start */
			<div>
				<TimelineControl
					options={this.state.timelineOptions}
					items={this.state.items}
					onItemSelect={this._itemSelect}
					onRangechange={this._rangechange}
					onRangechanged={this._rangechanged} />
			</div>
            /*jshint ignore:end */
		);
	}

});

module.exports = Timelineview;