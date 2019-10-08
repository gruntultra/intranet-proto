import React from 'react';
import {
  Link,
  Redirect
} from 'react-router-dom';
import './login.css'

class Login extends React.Component {
  constructor(props){
    super(props)
    const token = localStorage.getItem("token")
    let loggedIn = true
    if(token == null) {
      loggedIn = false
    }
    this.state={
      username:'',
      password:'',
      loggedIn
    }

    this.onChange = this.onChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  submitForm(e) {
    e.preventDefault()
    const {username, password} = this.state
    //login function
    if(username=== "admin" && password==="admin") {
      localStorage.setItem("token", "sakdnajkdbaSHA256")
      this.setState({
        loggedIn: true
      })
    }
  }
  render() {
    if(this.state.loggedIn) {
      return <Redirect to="/admin"/>
    }
    return (
      <div>
        <h1 className='labels'>Sign in</h1>
        <form className='form1' onSubmit={this.submitForm}>
          <input className='uname1' type="text" placeholder='A01388447' name='username' value={this.state.username} onChange={this.onChange}/>
          <br/>
          <input className='upass1' type="password" placeholder='password' name='password' value={this.state.password} onChange={this.onChange}/>
          <br/>
        <input className='submitbtn' type='submit'/>
        </form>
        <div className='auth-signin'>
                <button className="oauth">Sign in with NUSNET account</button>
        </div>
      </div>
    );
  }
}

export default Login;
