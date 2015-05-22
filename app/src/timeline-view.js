import React from 'react';
import Component from '../src/component';
import TimelineControl from'../src/timeline-control';

class TimelineView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			timelineOptions:{
				minDate:'2014-01-01',
				maxDate:'2016-01-01',
			},
			items:[
				{id:1, description:'descriptionA', eventTime:'04-10~04-20', start:'2015-04-10',state:'going'},
				{id:2, description:'descriptionB', eventTime:'03-01~03-20', start:'2015-03-01',state:'going'},
				{id:3, description:'descriptionC', eventTime:'03-15~03-25', start:'2015-03-15',state:'going'},
				{id:4, description:'descriptionD', eventTime:'02-21~02-28', start:'2015-02-21',state:'end'},
				{id:5, description:'descriptionE', eventTime:'01-30~02-15', start:'2015-01-30',state:'end'},
				{id:6, description:'descriptionF', eventTime:'12-20~12-31', start:'2014-12-20',state:'end'},
				{id:7, description:'descriptionG', eventTime:'12-10~12-25', start:'2014-12-10',state:'end'},
				{id:8, description:'descriptionH', eventTime:'11-05~12-05', start:'2014-11-05',state:'end'}
			]
		}
	}
	_timeSelect(id) {
		console.log('select ID:',id);
	}
	_rangeChange(properties) {

	}
	_rangeChanged(_rangechanged) {

	}
	render() {
		return (
            /*jshint ignore:start */
			<div>
				<TimelineControl
					options={this.state.timelineOptions}
					items={this.state.items}
					onItemSelect={this._itemSelect}
					onRangechange={this._rangeChange}
					onRangechanged={this._rangeChanged} />
			</div>
            /*jshint ignore:end */
		);
	}
};
export default TimelineView;


