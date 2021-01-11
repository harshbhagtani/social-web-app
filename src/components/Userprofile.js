import { Button, Card, Snackbar } from '@material-ui/core';
import { connect } from 'react-redux';

import React, { Component } from 'react';
import { fetchuserprofile } from '../actions/profile';
import { adduserasfriend, removeuserasfriend } from '../actions/friends';
class Userprofile extends Component {
  componentDidMount() {
    this.props.dispatch(fetchuserprofile(this.props.match.params.userid));
  }

  addFriend = () => {
    this.props.dispatch(adduserasfriend(this.props.match.params.userid));
  };
  removefriend = () => {
    this.props.dispatch(removeuserasfriend(this.props.match.params.userid));
  };
  checkUserIsfriend = () => {
    const { match, auth } = this.props;
    const userid = match.params.userid;

    const index = auth.userfriends
      .map((data) => data.to_user._id)
      .indexOf(userid);
    if (index === -1) {
      return false;
    } else return true;
  };

  render() {
    const checkUserisfriend = this.checkUserIsfriend();
    console.log(checkUserisfriend);
    return (
      <div>
        <div className="settings">
          <div className="settings-userinfo">
            <div className="profile-image">
              <div></div>
            </div>
            <div className="settings-content">
              <div>
                <b>Email</b>
              </div>

              <div>
                {this.props.profile.user ? this.props.profile.user.email : ''}
              </div>
              <br></br>

              <b>Name</b>
              <br></br>

              <div>
                {this.props.profile.user ? this.props.profile.user.name : ''}
              </div>

              <br></br>
              {!checkUserisfriend && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.addFriend}
                >
                  Add Friend
                </Button>
              )}
              {checkUserisfriend && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.removefriend}
                >
                  Remove Friend
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapstatetoprops(state) {
  return {
    auth: state.auth,
    profile: state.profile,
  };
}

export default connect(mapstatetoprops)(Userprofile);
