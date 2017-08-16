import React, { Component } from 'react';
import './RegisteredUsersList.css'

import Button from './Button.jsx'

class RegisteredUsersList extends Component {
  render () {
    //I suppose we can add a lot here...
    return (
      <div>
        <h4>Registered Users</h4>
        <ul> 
          <li>Mihir Dubey</li>
          <li>wtfStephen Huh</li> 
        </ul>
        <Button/>
      </div>
    );
  }
}

export default RegisteredUsersList;
