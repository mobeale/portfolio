import React, {Component} from 'react';
import logo from './logo.svg';
import geometry2 from './geometry2.png';
import './App.css';

var App = React.createClass({
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
          <div className={this.state.theme} style={{height: '100vh'}}>
              <div className="row">
                <div className="col-sm-12">
                  <div className="text-center">
                    <div className="theme-btn">
                    <button onClick={this.toggleWaterTheme} type="button" className="btn btn-water circle-lg"><i className="fa fa-tint"></i></button>
                    <button onClick={this.toggleFireTheme}  type="button" className="btn btn-fire circle-lg"><i className="fa fa-fire"></i></button>
                    <button onClick={this.toggleEarthTheme} type="button" className="btn btn-earth circle-lg"><i className="fa fa-leaf"></i></button>
                  </div>
                    <h1 style={{marginTop: '30px'}}>Mathew Beale</h1>


                      <button className="custom-btn"><i className="fa fa-id-card"></i></button>
                      <button className="custom-btn"><i className="fa fa-code"></i></button>
                      <button className="custom-btn"><i className="fa fa-graduation-cap"></i></button>
                  </div>
              </div>
              </div>
          </div>
      );
  }
})

export default App;
