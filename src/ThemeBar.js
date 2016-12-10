import React, {Component} from 'react';
import './App.css';

var ThemeBar = React.createClass({

 toggleFireTheme: function(){
   var theme = this.props.theme;
   var changeTheme = this.props.changeTheme;

   if (theme === 'default'){
      changeTheme('volcano')}
    else if (theme === 'volcano'){
      changeTheme('default')}
    else {changeTheme('volcano')}
  },

  toggleWaterTheme: function(){
    var theme = this.props.theme;
    var changeTheme = this.props.changeTheme;

    if (theme === 'default'){
       changeTheme('ocean')}
     else if (theme === 'ocean'){
       changeTheme('default')}
     else {changeTheme('ocean')}
    },

   toggleEarthTheme: function(){
     var theme = this.props.theme;
     var changeTheme = this.props.changeTheme;

     if (theme === 'default'){
        changeTheme('jungle')}
      else if (theme === 'jungle'){
        changeTheme('default')}
      else {changeTheme('jungle')}
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
