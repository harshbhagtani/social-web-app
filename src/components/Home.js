import React, { useEffect, useState } from 'react';
import Postlist from './Postlist';

import { connect } from 'react-redux';
import { fetchuserfriends } from '../actions/friends';
import { Link } from 'react-router-dom';
import { Avatar, Button } from '@material-ui/core';
import { createPost } from '../actions/post';

function Home(props) {
  const [newpost, setNewpost] = useState('');

  useEffect(() => {
    props.dispatch(fetchuserfriends());
  }, []);
  const createpost = () => {
    console.log(newpost);
    props.dispatch(createPost(newpost));
    setNewpost('');
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div className="post-flex">
        <div className="new-post">
          <textarea
            value={newpost}
            onChange={(e) => setNewpost(e.target.value)}
          ></textarea>
          <Button
            variant="contained"
            color="primary"
            style={{ marginLeft: '85%' }}
            onClick={createpost}
          >
            Add post
          </Button>
        </div>
        {props.posts.map((post) => {
          return <Postlist post={post} userid={post.user._id} />;
        })}
      </div>
      <div className="friends-list">
        <span style={{ fontSize: '32px' }}>Friends</span>

        <br></br>

        {props.auth.userfriends.map((data) => {
          return (
            <div className="friends-list-container">
              <Link
                style={{
                  color: 'black',
                  textDecoration: 'none',
                  display: 'flex',
                  marginTop: '10px',
                }}
                to={`/user/${data.to_user._id}`}
              >
                <Avatar></Avatar>
                <div style={{ marginLeft: '10px' }}>
                  <div style={{ fontSize: '18px' }}>{data.to_user.name}</div>
                  <div style={{ fontSize: '12px' }}>{data.to_user.email}</div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function mapstatetoprops(state) {
  return {
    posts: state.posts,
    auth: state.auth,
  };
}

export default connect(mapstatetoprops)(Home);
