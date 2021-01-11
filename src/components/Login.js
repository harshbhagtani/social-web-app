import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../actions/auth';

class Login extends Component {
  constructor(props) {
    super(props);

    //   this.emailRef = React.createRef();uncontrooled form components value stored in dom but not in react state
    //  this.passwordRef = React.createRef();

    this.state = {
      email: '',
      password: '',
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
  };
  submit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    console.log('email', email);
    console.log('email', password);

    this.props.dispatch(login(email, password));
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    //console.log('ppsss', this.props.location.state);

    if (this.props.auth.isLoggedin) {
      return <Redirect to={from}></Redirect>;
    }

    return (
      <form className="login-contain">
        <h2 style={{ color: '#3f51b5' }}>LOG IN</h2>

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
        <br></br>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={this.submit}
        >
          Log in
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
