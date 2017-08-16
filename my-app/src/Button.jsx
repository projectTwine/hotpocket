import React, { Component } from 'react';

class Button extends Component {

  activateLasers() {
    console.log('wabam');
    fetch('https://getpocket.com/v3/get?consumer_key=&69777-5cfb076c52d26d5d05552e63&access_token=', {method : 'GET', mode: 'cors'})
      .then(function(response) {
        console.log("heres our response", response);
      })
  }

  render() {
    return (
      <button className="btn btn-primary" type="button" onClick={this.activateLasers}>Fetch</button>
    )
  }
}

export default Button;
