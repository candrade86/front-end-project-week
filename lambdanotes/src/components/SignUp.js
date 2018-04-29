// Complete the component in this file.
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { register } from '../actions';

class SignUp extends Component {
  constructor() {
    super();
    this.state ={
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

 handleInput = event => {
   const { name, value } = event.target;
   this.setState({ [name]: value });
 }

 handleSignup = event => {
   event.preventDefault();
  const history = this.props.history
   let { username, email, password, confirmPassword } = this.state;
   this.props.register(username, email, password, confirmPassword, history);
   this.setState({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
   });
 };


  render() {
    
    
    return(
      <form onSubmit={this.handleSignup}>
        <input onChange={this.handleInput} type='text' name='email' value={this.state.email} placeholder='Enter Email'/>
        <input onChange={this.handleInput} type='text' name='username' value={this.state.username} placeholder='Enter Username'/>
        <input onChange={this.handleInput} type='text' name='password' value={this.state.password} placeholder='Enter Password'/>
        <input onChange={this.handleInput} type='text' name='confirmPassword' value={this.state.confirmPassword} placeholder='Confirm Password'/>
        <br />
        <button onClick={this.handleSignup}>Register</button>
    </form>
      
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};


export default connect(mapStateToProps, { register })(SignUp);

