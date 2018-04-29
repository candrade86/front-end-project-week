import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';

class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        };
    };

handleInput = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
}

handleLogin = event => {
    event.preventDefault();
    let { username, password } = this.state;
    let history = this.props.history;
    this.props.login( username, password, history )
    this.setState({
        username: '',
        password: ''
    });
}

render() {
    return (
        <form>
            <input onChange={this.handleInput} type='text' name='username' value={this.state.username} placeholder='Enter Username'/>
            <input onChange={this.handleInput} type='text' name='password' value={this.state.password} placeholder='Enter Password'/>
            <br />
            <button onClick={this.handleLogin}>Sign-In</button>
        </form>    
    );
}

}

const mapStateToProps = state => {
    return {
        authenticated: state.authenticated
    };
};
export default connect(mapStateToProps, { login })(SignIn);