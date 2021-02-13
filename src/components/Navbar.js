import React, { useEffect, useState } from 'react';
import { Avatar, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { authorizeuser, logOut } from '../actions/auth';
import { APIURLS } from '../helpers/url';

function Navbar(props) {
  const history = useHistory();
  useEffect(() => {}, [props.auth.user]);
  const opensettings = () => {
    history.push('/settings');
  };
  const [listshow, setListshow] = useState('none');
  const [listsearch, setListsearch] = useState([]);
  const [searchname, setSearchname] = useState('');
  const searchprofile = () => {
    const url = APIURLS.searchuser(searchname);
    console.log(searchname);
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          setListsearch(data.data.users);
          setListshow('block');
        } else {
          alert('No user with that username found');
        }
      });
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
            onChange={(e) => {
              setSearchname(e.target.value);
            }}
          ></input>

          <Button
            variant="outlined"
            color="primary"
            style={{ background: 'white' }}
            disabled={searchname === ''}
            onClick={searchprofile}
          >
            <img
              id="search"
              src="https://www.flaticon.com/svg/static/icons/svg/622/622669.svg"
              style={{ height: '15px' }}
            ></img>
          </Button>
        </form>
        <div style={{ display: listshow }}>
          <div className="search-result">
            {listsearch.map((data) => {
              return (
                <div>
                  <Link
                    style={{
                      color: 'black',
                      textDecoration: 'none',
                      display: 'flex',
                      marginTop: '10px',
                    }}
                    to={`/user/${data._id}`}
                  >
                    <Avatar></Avatar>
                    <div style={{ marginLeft: '10px' }}>
                      <div style={{ fontSize: '14px' }}>{data.name}</div>
                      <div style={{ fontSize: '9px' }}>{data.email}</div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
          <div
            style={{ height: '20px', background: 'red', color: 'white' }}
            onClick={() => {
              setListshow('none');
            }}
          >
            Clear
          </div>
        </div>
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
