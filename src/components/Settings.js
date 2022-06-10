import { Button, Card, Snackbar } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { edituser } from '../actions/auth';
import Navbar from './Navbar';
import avatar from '../assets/avatar.png';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.auth.user.name,
      password: '',
      confirmpassword: '',
      editState: false,
    };
  }
  editUser = () => {
    const { name, password, confirmpassword } = this.state;
    if (password !== confirmpassword) {
      alert('password not matches');
      return;
    }

    this.props.dispatch(
      edituser(name, password, confirmpassword, this.props.auth.user._id)
    );
  };

  render() {
    return (
      <div className="settings">
        <div className="settings-userinfo">
          <div className="profile-image">
            <img src={avatar}></img>
          </div>
          <div className="settings-content">
            <div>
              <b>Email</b>
            </div>

            <div>{this.props.auth.user ? this.props.auth.user.email : ''}</div>
            <br></br>

            <b>Name</b>
            <br></br>
            {!this.state.editState ? (
              <div>{this.props.auth.user ? this.props.auth.user.name : ''}</div>
            ) : (
              <input
                type="text"
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
              ></input>
            )}
            <br></br>
            {this.state.editState && (
              <div>
                <div>
                  <b>Password</b>
                </div>
                <input
                  type="password"
                  onChange={(e) => this.setState({ password: e.target.value })}
                ></input>
                <br />
                <div>
                  <b>Confirm Password</b>
                </div>
                <input
                  type="password"
                  onChange={(e) =>
                    this.setState({ confirmpassword: e.target.value })
                  }
                ></input>
              </div>
            )}
            {!this.state.editState && (
              <Button
                color="primary"
                variant="contained"
                onClick={() => this.setState({ editState: true })}
              >
                Edit Profile
              </Button>
            )}
            <br></br>
            {this.state.editState && (
              <Button
                color="primary"
                variant="contained"
                onClick={this.editUser}
              >
                Save Profile
              </Button>
            )}
            <br></br>
            <br></br>
            {this.state.editState && (
              <Button
                color="primary"
                variant="contained"
                onClick={() => this.setState({ editState: false })}
              >
                Go Back
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

function mapstatetoprops(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapstatetoprops)(Settings);
