import React, {Component} from 'react';
import './App.css';
import Clock from './Clock';
import ReactTooltip from 'react-tooltip';

var App = React.createClass({
	getInitialState: function() {
		return {theme: 'default'};
	},

	toggleFireTheme: function() {
		if (this.state.theme === 'default') {
			this.setState({theme: 'volcano'});
		} else if (this.state.theme === 'volcano') {
			this.setState({theme: 'default'})
		} else {
			this.setState({theme: 'volcano'});
		}
	},

	toggleWaterTheme: function() {
		if (this.state.theme === 'default') {
			this.setState({theme: 'ocean'});
		} else if (this.state.theme === 'ocean') {
			this.setState({theme: 'default'})
		} else {
			this.setState({theme: 'ocean'});
		}
	},

	toggleEarthTheme: function() {
		if (this.state.theme === 'default') {
			this.setState({theme: 'jungle'});
		} else if (this.state.theme === 'jungle') {
			this.setState({theme: 'default'})
		} else {
			this.setState({theme: 'jungle'});
		}
	},

	render() {

		return (
			<div>
				<div className={this.state.theme} style={{
					height: '100vh'
				}}>
					<div className="navbar-fixed">
						<Clock/>
						<div className="text-center theme-btn">
							<button onClick={this.toggleWaterTheme} type="button" className="btn btn-water circle-lg">
								<i className="fa fa-tint"></i>
							</button>
							<button onClick={this.toggleFireTheme} type="button" className="btn btn-fire circle-lg">
								<i className="fa fa-fire"></i>
							</button>
							<button onClick={this.toggleEarthTheme} type="button" className="btn btn-earth circle-lg">
								<i className="fa fa-leaf"></i>
							</button>
						</div>
					</div>

					<div className="center-box">
						<div className="col-sm-12 text-center">
							<h1>Mathew Beale</h1>
							<h4 >Developer</h4>
						</div>
					</div>
          <ReactTooltip effect="solid"/>

					<footer className="footer text-center">
						<div className="container">

							<button className="custom-btn" data-tip="About">
								<i className="fa fa-user-secret" dataToggle="tooltip" title="Hooray!"></i>
							</button>
							<button className="custom-btn" data-tip="Work">
								<i className="fa fa-code-fork"></i>
							</button>

						</div>
					</footer>
				</div>
			</div>
		);
	}
})

export default App;
