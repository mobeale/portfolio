import React from 'react';

var Footer = React.createClass({
  render(){
    return (
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
    )
  }
})


export default Footer;
