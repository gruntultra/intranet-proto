import React from 'react';
import Logo from '../../Assets/images/sheares-hall-logo.png'
import './header.css';
import {
  Link
} from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props)
    const token = localStorage.getItem("token")
    let loggedIn = true
    if(token==null) {
      loggedIn = false
    }
    this.state={
      loggedIn
    }
  }
  render() {
      return (
        <header>
          <div className="logo">
            <img src={Logo} height="100" alt="Sheares Logo"/>
          </div>

          <h1 className='hallname'> Sheares Intranet </h1>
          <nav>
            <ul>
              <li className='first'>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/Login'>Login</Link>
              </li>
            </ul>
          </nav>
        </header>
      );
    }
}

export default Header;
