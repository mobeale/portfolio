import React, {Component} from 'react';
import './App.css';
import Clock from './Clock';

var ThemeBar = React.createClass({
  getInitialState: function(){
      return {
          theme: 'default'
      };
  },
  toggleFireTheme: function(){
      if (this.state.theme === 'default'){
          this.setState({theme: 'volcano'});
      } else if (this.state.theme === 'volcano') {
        this.setState({theme: 'default'})
      } else {
          this.setState({theme: 'volcano'});
      }
  },

  toggleWaterTheme: function(){
      if (this.state.theme === 'default'){
          this.setState({theme: 'ocean'});
      } else if (this.state.theme === 'ocean') {
        this.setState({theme: 'default'})
      } else {
          this.setState({theme: 'ocean'});
      }
  },

  toggleEarthTheme: function(){
      if (this.state.theme === 'default'){
          this.setState({theme: 'jungle'});
      } else if (this.state.theme === 'jungle') {
        this.setState({theme: 'default'})
      }  else {
          this.setState({theme: 'jungle'});
      }
  },

  render() {

    return (
          <div className="text-center theme-btn">
            <button onClick={this.toggleWaterTheme} type="button" className="btn btn-water circle-lg"><i className="fa fa-tint"></i></button>
            <button onClick={this.toggleFireTheme}  type="button" className="btn btn-fire circle-lg"><i className="fa fa-fire"></i></button>
            <button onClick={this.toggleEarthTheme} type="button" className="btn btn-earth circle-lg"><i className="fa fa-leaf"></i></button>
          </div>
        );
        }
      })

export default ThemeBar;
