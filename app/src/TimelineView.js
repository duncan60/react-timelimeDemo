var React           = require('react'),
	TimelineControl = require('../src/TimelineControl'),
	Timelineview;

Timelineview = React.createClass({
	getInitialState: function() {
		return  {
			items:[
				{id:1, description:'descriptionA', eventTime:'04-10~04-20', start:'2015-04-10',className:'going'},
				{id:2, description:'descriptionB', eventTime:'03-01~03-20', start:'2015-03-01',className:'going'},
				{id:3, description:'descriptionC', eventTime:'12-15~01-15', start:'2014-12-15',className:'going'},
				{id:4, description:'descriptionD', eventTime:'11-01~11-14', start:'2014-11-01',className:'end'},
				{id:5, description:'descriptionE', eventTime:'07-15~08-15', start:'2014-07-15',className:'end'},
				{id:6, description:'descriptionF', eventTime:'05-01~06-14', start:'2014-05-01',className:'end'},
				{id:7, description:'descriptionG', eventTime:'05-01~08-15', start:'2014-05-01',className:'end'},
				{id:8, description:'descriptionH', eventTime:'05-10~06-14', start:'2014-05-05',className:'end'}
			]
		};
	},
	_itemSelect: function(id) {
		console.log('select ID:',id);
	},
	_rangechange: function(properties) {
		console.log('_rangechange',properties);
	},
	_rangechanged: function(properties) {
		console.log('_rangechanged',properties);
	},

	render: function() {
		return (
            /*jshint ignore:start */
			<div>
				<TimelineControl
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