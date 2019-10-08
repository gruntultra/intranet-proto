import React from 'react';
import {
  Link,
  Redirect
} from 'react-router-dom';

class Logout extends React.Component {
  constructor(props) {
    super(props)
    localStorage.removeItem("token")
  }
  state = {
    redirect: false
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 1200)
  }

  componentWillUnmount() {
    clearTimeout(this.id)
  }
  render() {
    return this.state.redirect? <Redirect to="/login" />
      : (
      <div>
        <p>You have been logged out.</p>
      </div>
    );
  }
}

export default Logout;
