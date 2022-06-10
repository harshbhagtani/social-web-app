import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  FormControl,
  Avatar,
  InputLabel,
  Input,
  Button,
  Icon,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { addLikeToStore, createComment, togglelike } from '../actions/post';
import likee from '../assets/likeee.png';
import commentt from '../assets/comment.png';
import share from '../assets/share.png';
import liked from '../assets/liked.png';
import avatar from '../assets/avatar.png';

function Postlist(props) {
  const dispatch = useDispatch();
  const [comment, setComment] = useState('');

  const postcomment = (e) => {
    e.preventDefault();

    dispatch(createComment(comment, props.post._id));
    setComment('');
    //dispatch(comment, props.post._id);
  };
  const triggerlike = () => {
    dispatch(togglelike(props.post._id));
  };
  const checklikestate = () => {
    for (let i = 0; i < props.post.likes.length; i++) {
      console.log(props.post._id, props.post.likes[i]);
      if (props.post.likes[i] == props.post._id) return true;
    }
    return false;
  };
  const likestate = checklikestate();
  console.log(likestate);
  return (
    <Card className="post-contain">
      <Link
        className="header"
        to={`/user/${props.userid}`}
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <Avatar alt="sssss" src={avatar} />
        <div>
          <div>
            <b>{props.post.user.name}</b>
          </div>
          <div style={{ fontSize: '.7rem' }}>a minute ago</div>
        </div>
      </Link>
      <p>{props.post.content}</p>
      <div className="counter-likes">
        <img src={likee}></img>
        <span>{props.post.likes.length}</span>
        <img src={commentt}></img>
        <span>{props.post.comments.length}</span>
      </div>

      <div className="comments-likes">
        <div onClick={triggerlike}>
          <b>Like</b>
          {likestate ? (
            <img style={{ marginLeft: '5px' }} id="like" src={liked}></img>
          ) : (
            <img style={{ marginLeft: '5px' }} id="like" src={likee}></img>
          )}
        </div>
        <div>
          <b>Comment</b>
          <img style={{ marginLeft: '5px' }} id="comment" src={commentt}></img>
        </div>
        <div>
          <b style={{ fontSize: '1.0rem' }}>Share</b>
          <img style={{ marginLeft: '5px' }} id="share" src={share}></img>
        </div>
      </div>
      <div className="comment-box">
        <form>
          <input
            type="text"
            onChange={(e) => setComment(e.target.value)}
            style={{
              width: '70%',
              backgroundColor: 'rgb(233,233,233)',
              border: 'none',
              outline: 'none',
              height: '25px',
            }}
            value={comment}
          ></input>
          <Button
            onClick={postcomment}
            style={{ height: '25px', marginLeft: '3px', borderRadius: '0' }}
            color="primary"
            variant="contained"
          >
            Post
          </Button>
        </form>

        <h4>Comments</h4>
        {props.post.comments.map((data) => {
          return (
            <div className="comment-post">
              <div className="header" style={{ fontSize: '.7rem' }}>
                <Avatar
                  style={{ width: '30px', height: '30px' }}
                  alt="sssss"
                  src={avatar}
                />
                <div>
                  <div>
                    <b>{data.user.name}</b>
                  </div>
                  <div style={{ fontSize: '.5rem' }}>a minute ago</div>
                </div>
              </div>
              <span style={{ fontSize: '.7rem' }}>{data.content}</span>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

function mapstatetoprops(state) {
  return {
    auth: state.auth,
    likes: state.likes,
  };
}

export default connect(mapstatetoprops)(Postlist);
