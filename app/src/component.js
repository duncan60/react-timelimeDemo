import React from 'react';
import Addons from 'react/addons';

class Component extends React.Component {
	constructor(props) {
    	super(props);
  	}
	shouldComponentUpdate(nextProps, nextState) {
		return Addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
	}
	_bind(...methods) {
  		methods.forEach( (method) => this[method] = this[method].bind(this) );
 	}
}

export default Component;
