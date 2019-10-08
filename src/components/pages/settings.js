import React from 'react';
import {
  Link,
  Redirect
} from 'react-router-dom';
import AdminHeader from '../headerComponent/adminheader'

class Settings extends React.Component {
  constructor(props) {
    super(props)
    const token = localStorage.getItem("token")
    let loggedIn = true
    if(token == null) {
      loggedIn = false
    }
    this.state={
        loggedIn
    }
  }
  render() {
    if(this.state.loggedIn === false) {
      return <Redirect to='/'/>
    }
    return(
      <div>
        <AdminHeader/>
        <p> Settings goes here </p>
      </div>
    )
  }
}

export default Settings;
