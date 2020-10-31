import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import React, { Component } from 'react';

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
  };

  render() {
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

export default Login;
