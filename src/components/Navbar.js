import React from 'react';
import { Button } from '@material-ui/core';

function Navbar(props) {
  return (
    <div className="navbar">
      <div>
        <h1 style={{ color: 'white' }}>Codeial</h1>
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
        <p>Harsh Bhagtani</p>
        <p>Harsh.Bhagtani</p>
      </div>

      <div className="logged">Log-out</div>
    </div>
  );
}

export default Navbar;
