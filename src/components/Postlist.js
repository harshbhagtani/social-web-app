import React, { useState } from 'react';
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
import { useDispatch } from 'react-redux';
import { createComment } from '../actions/post';

function Postlist(props) {
  const dispatch = useDispatch();
  const [comment, setComment] = useState('');
  const postcomment = (e) => {
    e.preventDefault();

    dispatch(createComment(comment, props.post._id));
    setComment('');
    //dispatch(comment, props.post._id);
  };
  return (
    <Card className="post-contain">
      <Link className="header" to={`/user/${props.userid}`}>
        <Avatar
          alt="sssss"
          src="https://userpic.codeforces.com/1389245/title/28f5a63a9d1d0b34.jpg"
        />
        <div>
          <div>
            <b>{props.post.user.name}</b>
          </div>
          <div style={{ fontSize: '.7rem' }}>a minute ago</div>
        </div>
      </Link>
      <p>{props.post.content}</p>
      <div className="counter-likes">
        <img src="https://www.flaticon.com/svg/static/icons/svg/833/833472.svg"></img>
        <span>12</span>
        <img src="https://www.flaticon.com/svg/static/icons/svg/1380/1380338.svg"></img>
        <span>4</span>
      </div>

      <div className="comments-likes">
        <div>
          <b>Like</b>
          <img
            style={{ marginLeft: '5px' }}
            id="like"
            src="https://www.flaticon.com/svg/static/icons/svg/1077/1077035.svg"
          ></img>
        </div>
        <div>
          <b>Comment</b>
          <img
            style={{ marginLeft: '5px' }}
            id="comment"
            src="https://www.flaticon.com/svg/static/icons/svg/1380/1380338.svg"
          ></img>
        </div>
        <div>
          <b style={{ fontSize: '1.0rem' }}>Share</b>
          <img
            style={{ marginLeft: '5px' }}
            id="share"
            src="https://www.flaticon.com/svg/static/icons/svg/1828/1828960.svg"
          ></img>
        </div>
      </div>
      <div className="comment-box">
        <form>
          <input
            type="text"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          ></input>
          <button onClick={postcomment}>Post</button>
        </form>

        <h4>Comments</h4>
        {props.post.comments.map((data) => {
          return (
            <div className="comment-post">
              <div className="header" style={{ fontSize: '.7rem' }}>
                <Avatar
                  style={{ width: '30px', height: '30px' }}
                  alt="sssss"
                  src="https://userpic.codeforces.com/1389245/title/28f5a63a9d1d0b34.jpg"
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

export default Postlist;
