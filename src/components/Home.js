import React from 'react';
import Postlist from './Postlist';

import { connect } from 'react-redux';

function Home(props) {
  return (
    <div>
      <div className="post-flex">
        {props.posts.map((post) => {
          return <Postlist post={post} />;
        })}
      </div>
    </div>
  );
}

function mapstatetoprops(state) {
  return {
    posts: state.posts,
  };
}

export default connect(mapstatetoprops)(Home);
