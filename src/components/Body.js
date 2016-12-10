import React from 'react';
import Name from './Name';
import About from './About';
import Work from './Work';


var Body = React.createClass({

	render() {
    var view = this.props.view;
		if (view === 'home') {
			return (<Name/>)}
      else if (view === 'about') {
			return (<About/>)}
      else if (view === 'work') {
      return (<Work />)}
    }
})

export default Body;
