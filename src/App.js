import React, {Component} from 'react';
import './App.css';
import Clock from './Clock';
import ThemeBar from './ThemeBar';
import Name from './Name';
import ReactTooltip from 'react-tooltip';
import Footer from './Footer';
import Header from './Header';

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
				<div className={this.state.theme} style={{height: '100vh'}}>

          <Header changeTheme={this.changeTheme} theme={this.state.theme}  />
				  <Name />
          <ReactTooltip effect="solid"/>
				  <Footer />


				</div>
			</div>
		);
	}
})

export default App;
