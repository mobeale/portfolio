import React from 'react';

var Footer = React.createClass({

  toggleAboutView: function(){
    var view = this.props.view;
    var changeView = this.props.changeView;
    if (view === 'home'){
      changeView('about')}
      else if (view === 'about'){
        changeView('home')}
      else if (view === 'work'){
        changeView('about')}
    },

  toggleWorkView: function(){
    var view = this.props.view;
    var changeView = this.props.changeView;
    if (view === 'home'){
        changeView('work')}
      else if (view === 'work'){
        changeView('home')}
      else if (view === 'about'){
        changeView('work')}
    },

  render(){
    return (
      <footer className="footer text-center">
        <div className="container">
          <button onClick={this.toggleAboutView} className="custom-btn" data-tip="About">
            <i className="fa fa-user-secret"></i>
          </button>
          <button onClick={this.toggleWorkView} className="custom-btn" data-tip="Work">
            <i className="fa fa-code-fork"></i>
          </button>
        </div>
      </footer>
    )
  }
})


export default Footer;
