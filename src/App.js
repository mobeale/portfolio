import React, {Component} from 'react';
import './App.css';
import Clock from './Clock';
import ThemeBar from './ThemeBar';
import ReactTooltip from 'react-tooltip';

var App = React.createClass({
  getInitialState: function(){
      return {
          theme: 'default'
      };
  },
  changeTheme: function(newTheme){
      this.setState({
        theme: newTheme
      });
    },


  render() {
		return (
			<div>
				<div className={this.state.theme} style={{
					height: '100vh'
				}}>
					<div className="navbar-fixed">
						<Clock/>
						<ThemeBar onChange={this.props.onChange} />
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
								<i className="fa fa-user-secret"></i>
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
