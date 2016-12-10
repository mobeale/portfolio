import React from 'react';
import Clock from './Clock';
import ThemeBar from './ThemeBar';

var Header = React.createClass({
  render() {
    return (

    <div className="navbar-fixed">
      <Clock/>
      <ThemeBar changeTheme={this.props.changeTheme} theme={this.props.theme} />
    </div>
  )
  }
})

export default Header;
