import React from 'react';

var Clock = React.createClass({
  setTime: function(){
  	var currentdate = new Date();
  	var hours = currentdate.getUTCHours();
    var minutes = currentdate.getUTCMinutes();
    var seconds = currentdate.getUTCSeconds();
      // correct for number over 24, and negatives

      if( hours >= 24 ){ hours -= 24; }
      if( hours < 0   ){ hours += 12; }

      hours = hours + "";
      if( hours.length == 1 ){ hours = "0" + hours; }



      minutes = minutes + "";
      if( minutes.length == 1 ){ minutes = "0" + minutes; }


      console.log(hours, minutes)
      this.setState({
      	hours: hours,
        minutes: minutes,
        seconds: seconds
      });
  },
  componentWillMount: function(){
  	this.setTime();
  },
  componentDidMount: function(){
  	 window.setInterval(function () {
      this.setTime();
    }.bind(this), 1000);
  },
  render: function() {

    return(
      <div className="clock">
        <p>{this.state.hours}:{this.state.minutes}:{this.state.seconds}</p>
      </div>
    )
  }
});

export default Clock;
