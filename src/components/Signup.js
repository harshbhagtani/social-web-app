import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, signup } from '../actions/auth';

class Login extends Component {
  constructor(props) {
    super(props);
    //   this.emailRef = React.createRef();uncontrooled form components value stored in dom but not in react state
    //  this.passwordRef = React.createRef();

    this.state = {
      email: '',
      password: '',
      confirmpass: '',
      name: '',
    };
  }

  handleChange = (e) => {
    const { email, password } = this.state;

    if (e.target.type === 'email') {
      this.setState({
        email: e.target.value,
      });
    }
    if (e.target.type === 'password') {
      this.setState({
        password: e.target.value,
      });
    }
    if (e.target.type === 'text') {
      this.setState({
        name: e.target.value,
      });
    }
  };
  submit = (e) => {
    e.preventDefault();
    const { email, password, name, confirmpass } = this.state;

    console.log('email', email);
    console.log('email', password);

    console.log('email', name);
    console.log('email', confirmpass);
    this.props.dispatch(signup(email, password, name, confirmpass));
  };

  render() {
    return (
      <form className="login-contain">
        <h2 style={{ color: '#3f51b5' }}>SIGN UP</h2>

        <div className="login-user">
          <img src="https://www.flaticon.com/svg/static/icons/svg/1828/1828399.svg"></img>
          <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={this.handleChange} type="text" />
          </FormControl>
        </div>
        <div className="login-user">
          <img src="https://www.flaticon.com/svg/static/icons/svg/1828/1828399.svg"></img>
          <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={this.handleChange} type="email" />
          </FormControl>
        </div>
        <div className="login-user">
          <img src="https://www.flaticon.com/svg/static/icons/svg/3593/3593563.svg"></img>
          <FormControl>
            <InputLabel>Password</InputLabel>
            <Input type="password" onChange={this.handleChange} />
          </FormControl>
        </div>
        <div className="login-user">
          <img src="https://www.flaticon.com/svg/static/icons/svg/3593/3593563.svg"></img>
          <FormControl>
            <InputLabel> Confirm Password</InputLabel>
            <Input
              type="password"
              onChange={(e) => {
                this.setState({ confirmpass: e.target.value });
              }}
            />
          </FormControl>
        </div>
        <br></br>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={this.submit}
        >
          Sign up
        </Button>
      </form>
    );
  }
}
function mapstatetoprops(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapstatetoprops)(Login);
