import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { authorizeuser, logOut } from '../actions/auth';

function Navbar(props) {
  const history = useHistory();
  useEffect(() => {}, [props.auth.user]);
  const opensettings = () => {
    history.push('/settings');
  };

  const logout = () => {
    if (props.auth.isLoggedin) {
      props.dispatch(logOut());
      localStorage.clear();
      history.push('/Login');
    }
  };
  return (
    <div className="navbar">
      <div onClick={() => history.push('/')}>
        <h1 style={{ color: 'white' }}>Fakebook</h1>
      </div>

      <div>
        <form style={{ display: 'flex' }}>
          <input
            type="text"
            className="searchbar"
            placeholder="Search..."
          ></input>

          <Button
            variant="outlined"
            color="primary"
            style={{ background: 'white' }}
          >
            <img
              id="search"
              src="https://www.flaticon.com/svg/static/icons/svg/622/622669.svg"
              style={{ height: '15px' }}
            ></img>
          </Button>
        </form>
      </div>
      <div className="user-profile">
        <p>{props.auth.user && props.auth.user.name}</p>
        <p>{props.auth.user && props.auth.user.email}</p>
      </div>

      <div className="logged">
        <div onClick={logout}>
          {props.auth.isLoggedin ? 'Log-out' : 'Log-in'}
        </div>
      </div>
      <div className="logged">
        <div onClick={opensettings}>Settings</div>
      </div>
    </div>
  );
}
function mapstatetoprops(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapstatetoprops)(Navbar);
